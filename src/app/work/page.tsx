import Navbar from "@/components/navbar";
import WorkCard1 from "@/components/work_cards/WorkCard1";
import WorkCard2 from "@/components/work_cards/WorkCard2";

export default function Work() {
  return (
    <div className="min-h-screen">
      {/* Primary Navigation */}
      <Navbar /> {/* Imported Navbar component  */}
      <div className="w-full flex flex-col items-center leading-loose">
        <h2 className="text-4xl font-semibold text-gray-900">My Work</h2>
        <p className="text-lg text-gray-500 max-w-md">
          Exploring my creativity through clean, simple code.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="h-[690px] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2">
          {/* Card Column 1 */}
          <WorkCard2 />

          {/* Card Column 2 */}
          <WorkCard1 />
        </div>
      </div>
    </div>
  );
}
