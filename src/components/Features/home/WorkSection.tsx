"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

// Constants
const WORK_ITEMS = [
  {
    id: 1,
    image: "/Images/work/work-1.png",
    alt: "AI Artist Application - Mobile App",
    title: "My Airtel Application",
    category: "Mobile App",
  },
  {
    id: 2,
    image: "/Images/work/work-2.png",
    alt: "Creative Dashboard - Web Application",
    title: "Creative Dashboard",
    category: "Web Application",
  },
  {
    id: 3,
    image: "/Images/work/work-3.png",
    alt: "Financial Analytics - Mobile App",
    title: "Financial Analytics",
    category: "Mobile App",
  },
  {
    id: 4,
    image: "/Images/work/work-4.png",
    alt: "Brand Identity - Design System",
    title: "Brand Identity",
    category: "Design System",
  },
  {
    id: 5,
    image: "/Images/work/work-5.png",
    alt: "E-commerce Platform - Web Application",
    title: "E-commerce Platform",
    category: "Web Application",
  },
] as const;

const MotionTypewriterText = ({
  text,
  isVisible,
  delay = 0,
}: {
  text: string;
  isVisible: boolean;
  delay?: number;
}) => {
  return (
    <div className="relative overflow-hidden mb-2 w-fit">
      {/* Full text (always rendered for layout) */}
      <div className="bg-black text-white px-2 py-2 text-sm md:text-base font-medium invisible">
        {text}
      </div>

      {/* Animated revealing text */}
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={
          isVisible
            ? { clipPath: "inset(0 0% 0 0)" }
            : { clipPath: "inset(0 100% 0 0)" }
        }
        transition={{
          duration: 0.4,
          delay: delay / 1000,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-black text-white px-2 py-2 text-sm md:text-base font-medium"
      >
        {text}
      </motion.div>
    </div>
  );
};

const WorkCard = ({ item }: { item: (typeof WORK_ITEMS)[number] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mb-8">
      <div
        className="relative w-full h-auto overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={item.image}
          alt={item.alt}
          width={800}
          height={600}
          className="w-full h-auto object-contain "
          sizes="100vw"
        />

        {/* Hover Text Labels */}
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 ">
          <MotionTypewriterText
            text={item.title}
            isVisible={isHovered}
            delay={100}
          />
          <MotionTypewriterText
            text={item.category}
            isVisible={isHovered}
            delay={100}
          />
        </div>
      </div>
    </div>
  );
};

const WorkSection = () => {
  return (
    <section className="border-b pb-12">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 py-6">
            <div className="w-2 h-2 bg-primary-1000"></div>
            <p className="text-base text-primary-500 uppercase tracking-wide">
              WORK
            </p>
          </div>
        </div>

        {/* Work Images Column */}
        <div className="flex flex-col gap-20">
          {WORK_ITEMS.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { WorkSection };
