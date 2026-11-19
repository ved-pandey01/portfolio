import { Nav } from "@/components/Nav";
import { CommandMenu } from "@/components/CommandMenu";
import { ResearchTeaser } from "@/components/ResearchTeaser";
import { Now } from "@/components/Now";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <CommandMenu />
      <main id="main">
        <Hero />
        <Stats />
        <Work />
        <ResearchTeaser />
        <Now />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
