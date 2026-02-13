"use client";
import React from "react";
import WorkCard from "../WorkCard";
import {experiences} from '@/constants/index.js'

export default function WorkCard1() {
  return (
    <div className="flex flex-col p-7 gap-20">
      {experiences.map((experience, idx) => { 
        return (
        <WorkCard
        key={idx}
        title={experience.title}
        imageSrc={experience.imageSrc}
        description={experience.description}
        techStackImg={experience.techStackImg}
        projectLink={experience.projectLink}
        />
        )
      })}
    </div>
  );
}
