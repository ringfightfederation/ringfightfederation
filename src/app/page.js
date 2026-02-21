import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import GameStructure from "@/components/GameStructure";
import RopeDuel from "@/components/RopeDuel";
import GoverningBody from "@/components/GoverningBody";
import Affiliations from "@/components/Affiliations";
import Championships from "@/components/Championships";
import Gallery from "@/components/Gallery";
import Downloads from "@/components/Downloads";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Founder />
      <GameStructure />
      <RopeDuel />
      <GoverningBody />
      <Affiliations />
      <Championships />
      <Gallery />
      <Downloads />
      <Contact />
    </main>
  );
}
