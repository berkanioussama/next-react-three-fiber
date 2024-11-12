
import Scene from "@/app/_components/scene";
import Hero from "@/app/_components/hero";
import Features from "@/app/_components/features";
import Projects from "@/app/_components/projects";
import Navbar from "@/app/_components/navbar";

export default function Home() {
  return (
    <div className="min-h-svh bg-neutral-950 text-white">
      <Navbar />
      <Scene/>
      <Hero />
      <Features />
      <Projects />
    </div>
  );
}
