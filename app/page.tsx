import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Shots from "@/components/Shots";
import Work from "@/components/Work";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Shots />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
