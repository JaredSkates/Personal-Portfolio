import Navbar from "@/components/navbar";
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="bg-[#999d9e] h-screen">
      <Navbar/> {/* Imported Navbar component  */}
      <Hero/> {/* Imported Hero component  */}
    </div>
  );
}
