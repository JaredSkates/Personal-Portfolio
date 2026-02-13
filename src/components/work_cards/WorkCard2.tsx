"use client";
import React from "react";
import WorkCard from "../WorkCard";
import {experiences2} from '@/constants/index.js'

export default function WorkCard2() {
  return (
    <div className="flex flex-col p-7 gap-20 mt-10">
      {experiences2.map((experience2, idx) => {
        return (
          <WorkCard
          key={idx}
          title={experience2.title}
          imageSrc={experience2.imageSrc}
          description={experience2.description}
          techStackImg={experience2.techStackImg}
          projectLink={experience2.projectLink}
          />
        )
      })}
    </div>
  );
}
