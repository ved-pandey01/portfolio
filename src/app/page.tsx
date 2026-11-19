import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Now } from "@/components/Now";
import { ResearchTeaser } from "@/components/ResearchTeaser";
import { Stats } from "@/components/Stats";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Stats />
      <Work />
      <ResearchTeaser />
      <Now />
      <About />
      <Contact />
    </main>
  );
}
