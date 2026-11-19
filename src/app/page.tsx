import { Nav } from "@/components/Nav";
import { CommandMenu } from "@/components/CommandMenu";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Nav />
      <CommandMenu />
      <main id="main">
        <Hero />
        <Stats />
      </main>
    </>
  );
}
