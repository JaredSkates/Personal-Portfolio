import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    title: string;
    imageSrc: string;
    description: string;
    techStackImg?: string;
    projectLink?: string;
    className?: string;
}

export default function WorkCard({
    title,
    imageSrc,
    description,
    techStackImg,
    projectLink,
    className
}: Props) {
    return (
        <div className={`flex flex-col p-7 gap-3 w-[325px] h-[355px] bg-white font-medium text-black rounded-2xl ${className}`}>
            <Image width={330} height={185} src={imageSrc} alt={`${title}-img`} />
            <h1 className="text-lg">{title}</h1>
            <hr className="border-black" />
            <p className="text-sm">{description}</p>
            <div className="flex gap-10 items-center">
                {techStackImg && <Image width={150} height={200} src={techStackImg} alt="techStack" />}
                {projectLink ? (
                <Link className="text-xs cursor-pointer hover:text-slate-400" href={projectLink}>
                    View Project
                </Link>
                ) : null}
            </div>
        </div>
    );
}