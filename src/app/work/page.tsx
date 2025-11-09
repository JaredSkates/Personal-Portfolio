import Navbar from "@/components/navbar";
import WorkCard1 from "@/components/WorkCard1";
import WorkCard2 from "@/components/WorkCard2";

export default function Work() {
  return (
    <div className="min-h-screen">
      {/* Primary Navigation */}
      <Navbar/> {/* Imported Navbar component  */}
      
      <div className="w-full flex justify-center">
        <div className="h-[760px] overflow-y-auto grid grid-cols-1 sm:grid-cols-2">
          {/* Card Column 1 */}
          <WorkCard2 />

          {/* Card Column 2 */}
          <WorkCard1 />

        </div>
      </div>

    </div>
  );
}
