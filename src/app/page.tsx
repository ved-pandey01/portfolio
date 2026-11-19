import { Nav } from "@/components/Nav";
import { CommandMenu } from "@/components/CommandMenu";
import { ResearchTeaser } from "@/components/ResearchTeaser";
import { Now } from "@/components/Now";
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
      </main>
    </>
  );
}
