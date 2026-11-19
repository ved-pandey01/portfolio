import { Nav } from "@/components/Nav";
import { CommandMenu } from "@/components/CommandMenu";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Nav />
      <CommandMenu />
      <main id="main">
        <Hero />
      </main>
    </>
  );
}
