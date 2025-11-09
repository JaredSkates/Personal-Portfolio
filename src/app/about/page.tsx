import Navbar from "@/components/navbar";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Primary Navigation */}
      <Navbar /> {/* Imported Navbar component  */}
      {/* About Me Pargraph */}
      <div className="flex flex-col md:flex-row p-6 gap-10 sm:gap-0 sm:justify-center">
        <div className="md:order-last p-4 flex w-full md:w-[35%] justify-center">
          <Image
            width={320}
            height={200}
            src="/jaredpicture.png"
            alt="profilePic"
          />
        </div>

        <div className="flex p-4 sm:w-[530px] sm:h-full flex-col gap-7 text-black justify-center">
          <h2 className="text-3xl font-extralight">About Me</h2>
          <p className="text-xl font-thin leading-loose">
            I’m a full stack developer who loves bringing ideas to life through
            thoughtful design and clean functionality. I enjoy crafting
            intuitive UIs, building reliable back-end systems, and connecting
            everything through seamless API integration. Outside of coding,
            you’ll find me snowboarding, diving into music, or exploring fashion
            — all sources of inspiration that shape my creative process.
          </p>
        </div>
      </div>
      {/* About Me Footer */}
      <div className="flex flex-col p-2 gap-20 items-center sm:flex-row sm:w-full sm:justify-center">
        <div className="p-4 flex flex-col w-[300px] h-[222px] text-black leading-loose font-extralight gap-4">
          <span>01</span>
          <hr className="border-black" />
          <h2 className="text-xl leading-snug">Flow</h2>
          <p>
            Crafting seamless experiences that move intuitively from design to
            interaction.
          </p>
        </div>

        <div className="p-4 flex flex-col w-[300px] h-[222px] text-black leading-loose font-extralight gap-4">
          <span>02</span>
          <hr className="border-black" />
          <h2 className="text-xl leading-snug">Structure</h2>
          <p>
            Building strong, dependable systems that empower every creative
            layer
          </p>
        </div>

        <div className="p-4 flex flex-col w-[300px] h-[222px] text-black leading-loose font-extralight gap-4">
          <span>03</span>
          <hr className="border-black" />
          <h2 className="text-xl leading-snug">Fusion</h2>
          <p>
            Blending design and development into a unified digital experience
          </p>
        </div>
      </div>
    </div>
  );
}
