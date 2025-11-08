"use client";
import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCES } from '../constants';

type Props = {}

const Experience = (props: Props) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <>
    </>

  )
}

export default Experience;