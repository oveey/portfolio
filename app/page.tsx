import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Shots from "@/components/Shots";
import Clients from "@/components/Clients";
import Work from "@/components/Work";
import About from "@/components/About";
import Process from "@/components/Process";
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
        <Clients />
        <Work />
        <About />
        <Process />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
