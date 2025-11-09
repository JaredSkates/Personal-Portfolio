"use client";
import React from "react";
import WorkCard from "../WorkCard";

export default function WorkCard2() {
  return (
    <div className="flex flex-col p-7 gap-20 mt-10">
      <WorkCard
        title="Neuroflow AI"
        imageSrc="/work1.png"
        description="AI assisted note taking application built for the web"
        techStackImg="/TechStack1.svg"
        projectLink="https://github.com/JaredSkates/NeuroFlow-AI"
      />

      <WorkCard
        title="Neuroflow AI"
        imageSrc="/work1.png"
        description="AI assisted note taking application built for the web"
        techStackImg="/TechStack1.svg"
        projectLink="https://github.com/JaredSkates/NeuroFlow-AI"
      />
      
      <WorkCard
        title="Neuroflow AI"
        imageSrc="/work1.png"
        description="AI assisted note taking application built for the web"
        techStackImg="/TechStack1.svg"
        projectLink="https://github.com/JaredSkates/NeuroFlow-AI"
      />
    </div>
  );
}
