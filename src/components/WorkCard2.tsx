'use client';
import Link from "next/link";
import Image from "next/image";

const WorkCard2 = () => {
    return (
        <div className="flex flex-col p-7 gap-20 mt-10">

            {/* Work Cards */}
            <div className="flex flex-col p-7 gap-3 w-[325px] h-[355px] bg-white font-medium text-black rounded-2xl">
              <Image width={330} height={185} src='/work1.png' alt="workimg" />
              <h1 className="text-lg">Neuroflow AI</h1>
              <hr className="border-black" />
              <p className="text-sm">AI assisted note taking application built for the web</p>
              <div className="flex gap-10 items-center">
                <Image width={150} height={200} src='/TechStack1.svg' alt='techStack' />
                <Link className="text-xs cursor-pointer hover:text-slate-400" href={'https://github.com/JaredSkates/NeuroFlow-AI'}>View Project</Link>
              </div>
            </div>

            <div className="flex flex-col p-7 gap-3 w-[325px] h-[355px] bg-white font-medium text-black rounded-2xl">
              <Image width={330} height={185} src='/work1.png' alt="workimg" />
              <h1 className="text-lg">Neuroflow AI</h1>
              <hr className="border-black" />
              <p className="text-sm">AI assisted note taking application built for the web</p>
              <div className="flex gap-10 items-center">
                <Image width={150} height={200} src='/TechStack1.svg' alt='techStack' />
                <Link className="text-xs cursor-pointer hover:text-slate-400" href={'https://github.com/JaredSkates/NeuroFlow-AI'}>View Project</Link>
              </div>
            </div>

            <div className="flex flex-col p-7 gap-3 w-[325px] h-[355px] bg-white font-medium text-black rounded-2xl">
              <Image width={330} height={185} src='/work1.png' alt="workimg" />
              <h1 className="text-lg">Neuroflow AI</h1>
              <hr className="border-black" />
              <p className="text-sm">AI assisted note taking application built for the web</p>
              <div className="flex gap-10 items-center">
                <Image width={150} height={200} src='/TechStack1.svg' alt='techStack' />
                <Link className="text-xs cursor-pointer hover:text-slate-400" href={'https://github.com/JaredSkates/NeuroFlow-AI'}>View Project</Link>
              </div>
            </div>
          </div>
    );
}

export default WorkCard2;