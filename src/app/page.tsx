import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Primary Navigation */}
      <Navbar /> {/* Imported Navbar component  */}
      {/* Hero */}
      <Hero /> {/* Imported Hero component  */}
      {/* Experience */}
      <Experience /> {/* Imported Experience component  */}
    </div>
  );
}
