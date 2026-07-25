// One-off asset pipeline: shrink + convert the heavy legacy PNGs/JPEGs to WebP,
// rename to clean kebab-case, and lay everything out under /public.
// Run with: node scripts/optimize-assets.mjs
import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "assets", "images");
const PUB = path.join(ROOT, "public");

const MAX_W = 1800; // cap width — plenty for retina display of screenshots
const QUALITY = 82;

async function ensure(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function toWebp(srcFile, destFile, maxW = MAX_W) {
  const img = sharp(srcFile, { limitInputPixels: false });
  const meta = await img.metadata();
  const pipeline = img.rotate();
  if (meta.width && meta.width > maxW) pipeline.resize({ width: maxW });
  await pipeline.webp({ quality: QUALITY }).toFile(destFile);
  const { size } = await fs.stat(destFile);
  return size;
}

async function copyRaw(srcFile, destFile) {
  await fs.copyFile(srcFile, destFile);
}

// project slug -> { thumb: source thumbnail, gallery: source folder }
const projects = {
  gokardinal: { thumb: "377shots_so.png", gallery: null, extras: ["377shots_so.png", "561shots_so.png"] },
  tripperway: { thumb: "Tripperway.png", gallery: null },
  billport: { thumb: "billport.png", gallery: "Billport images" },
  eff: { thumb: "Eff.png", gallery: "Eff images" },
  heam: { thumb: "Heam.svg", gallery: null },
  sportsbants: { thumb: "Sportbants.png", gallery: "Sportsbants images" },
  castle: { thumb: "Castle Hub.png", gallery: "Castehub images" },
};

const skillIcons = [
  "Github.svg", "AdobeXD.svg", "vitejs.svg", "Figma logo.svg", "Jira.svg",
  "adobe.svg", "Miro.svg", "Sketch.svg", "Notion.svg", "Slack.svg",
  "vscode.svg", "openai.svg", "ai.svg", "Frame 12.svg",
];

const slug = (s) =>
  s.replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/\(|\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const report = [];

async function run() {
  await ensure(path.join(PUB, "images", "projects"));
  await ensure(path.join(PUB, "images", "gallery"));
  await ensure(path.join(PUB, "images", "skills"));
  await ensure(path.join(PUB, "images", "brand"));

  // Project thumbnails
  for (const [key, cfg] of Object.entries(projects)) {
    const src = path.join(SRC, cfg.thumb);
    try {
      await fs.access(src);
      if (cfg.thumb.endsWith(".svg")) {
        const dest = path.join(PUB, "images", "projects", `${key}.svg`);
        await copyRaw(src, dest);
        report.push([`${key} thumb (svg)`, "copied"]);
      } else {
        const dest = path.join(PUB, "images", "projects", `${key}.webp`);
        const size = await toWebp(src, dest);
        report.push([`${key} thumb`, `${(size / 1024).toFixed(0)}KB`]);
      }
    } catch (e) {
      report.push([`${key} thumb`, `MISSING (${cfg.thumb})`]);
    }

    // Gallery folder
    if (cfg.gallery) {
      const gdir = path.join(SRC, cfg.gallery);
      const outDir = path.join(PUB, "images", "gallery", key);
      await ensure(outDir);
      let files = [];
      try {
        files = (await fs.readdir(gdir)).filter((f) => !f.startsWith(".") && /\.(png|jpe?g)$/i.test(f));
      } catch {}
      for (const f of files) {
        const dest = path.join(outDir, `${slug(f)}.webp`);
        try {
          const size = await toWebp(path.join(gdir, f), dest);
          report.push([`  ${key}/${slug(f)}`, `${(size / 1024).toFixed(0)}KB`]);
        } catch (e) {
          report.push([`  ${key}/${f}`, `ERR ${e.message}`]);
        }
      }
    }
  }

  // Skill icons (tiny SVGs) — copy as-is with clean names
  for (const icon of skillIcons) {
    const src = path.join(SRC, icon);
    try {
      await fs.access(src);
      await copyRaw(src, path.join(PUB, "images", "skills", `${slug(icon)}.svg`));
      report.push([`skill ${slug(icon)}`, "copied"]);
    } catch {
      report.push([`skill ${icon}`, "MISSING"]);
    }
  }

  // Brand / about photo / logo
  const brand = [
    ["ov.png", "logo.webp", 240],
    ["WhatsApp Image 2025-08-24 at 15.19.54.jpeg", "portrait.webp", 900],
  ];
  for (const [srcName, destName, w] of brand) {
    const src = path.join(SRC, srcName);
    try {
      await fs.access(src);
      const size = await toWebp(src, path.join(PUB, "images", "brand", destName), w);
      report.push([`brand ${destName}`, `${(size / 1024).toFixed(0)}KB`]);
    } catch {
      report.push([`brand ${srcName}`, "MISSING"]);
    }
  }

  console.log("\nAsset optimization report:");
  for (const [k, v] of report) console.log(`  ${k.padEnd(42)} ${v}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
