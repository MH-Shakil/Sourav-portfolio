"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { HoverReveal } from "@/components/Molecules/HoverReveal";

// Constants
const SPRING_CONFIG = {
  mass: 0.3,
  stiffness: 50,
  damping: 30,
  restDelta: 0.001,
} as const;

const HeroText = () => (
  <div className="text-primary-500 text-lg !w-[45%] font-ibm-plex">
    <p>
      With 5+ years of experience, I created{" "}
      <Link href="#" className="text-blue-500 hover:underline font-bold italic">
        Athena Design System
      </Link>
      , a custom design system, and helped 10+ brands deliver research-driven,
      results-oriented digital experiences.
    </p>
  </div>
);

const ParallaxHeading = ({
  designingX,
  growthX,
}: {
  designingX: any;
  growthX: any;
}) => (
  <div className="mb-16 overflow-hidden">
    <h1 className="text-6xl md:text-[192px] leading-[192px] font-bold text-primary-800 uppercase">
      <motion.span
        style={{ x: designingX }}
        className="block text-left font-space-grotesk"
      >
        Designing
      </motion.span>
      <motion.span
        style={{ x: growthX }}
        className="block text-right font-space-grotesk"
      >
        Growth
      </motion.span>
    </h1>
  </div>
);

const ContactSection = () => {
  const defaultContent = (
    <>
      <p className="text-primary-500 font-medium text-base leading-5 mb-2">
        Available for Work
      </p>
      <p className="text-primary-500 text-base">SOURAVDHALI@PROTONMAIL.COM</p>
    </>
  );

  const hoverContent = (
    <button className="w-[148px] h-[148px] rounded-full bg-primary-800 text-white flex items-center justify-center text-sm font-medium focus:outline-none font-ibm-plex">
      Send_Message&nbsp;
      <span className="text-xl">↗</span>
    </button>
  );

  return (
    <HoverReveal defaultContent={defaultContent} hoverContent={hoverContent} />
  );
};

const HeroSection = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, SPRING_CONFIG);
  const designingX = useTransform(smoothProgress, [0, 1], [0, -100]);
  const growthX = useTransform(smoothProgress, [0, 1], [0, 100]);

  return (
    <div className="text-center mb-8">
      <p className="text-base text-primary-500 uppercase mb-8">
        Since 2019 - Present
      </p>

      <ParallaxHeading designingX={designingX} growthX={growthX} />

      <div className="flex justify-between gap-8 text-left">
        <HeroText />
        <ContactSection />
      </div>
    </div>
  );
};

export { HeroSection };
