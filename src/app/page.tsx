import Navbar from "@/components/navbar";
import Hero from '@/components/Hero';
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar/> {/* Imported Navbar component  */}
      <Hero/> {/* Imported Hero component  */}
      <div className="h-[20vh]"></div>
      <Experience/> {/* Imported Experience component  */}
    </div>
  );
}
