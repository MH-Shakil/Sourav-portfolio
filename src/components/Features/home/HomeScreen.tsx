"use client";

import Link from "next/link";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const HomeScreen = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.3,
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });

  const designingX = useTransform(smoothProgress, [0, 1], [0, -100]);
  const growthX = useTransform(smoothProgress, [0, 1], [0, 100]);

  // Social media links array
  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Behance", href: "#" },
    { name: "Instagram", href: "#" },
  ];

  // Hover state for the div
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <p className="text-base text-primary-500 uppercase mb-8">
          Since 2019 - Present
        </p>

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

        <div className="flex justify-between gap-8 text-left">
          <div className="text-primary-500 text-lg !w-[45%] font-ibm-plex">
            <p>
              With 5+ years of experience, I created{" "}
              <Link
                href="#"
                className="text-blue-500 hover:underline font-bold italic"
              >
                Athena Design System
              </Link>
              , a custom design system, and helped 10+ brands deliver
              research-driven, results-oriented digital experiences.
            </p>
          </div>

          {/* Div with exit animation effect */}
          <div
            className="text-left relative min-h-[80px] flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence initial={false}>
              {!isHovered ? (
                <motion.div
                  key="text"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className=""
                >
                  <p className="text-primary-500 font-medium text-base leading-5 mb-2">
                    Available for Work
                  </p>
                  <p className="text-primary-500 text-base">
                    SOURAVDHALI@PROTONMAIL.COM
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {isHovered ? (
                <motion.div
                  key="button"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="absolute right-20 flex items-center justify-center"
                >
                  <motion.button
                    className="w-[148px] h-[148px] rounded-full bg-primary-800 text-white flex items-center justify-center text-sm font-medium focus:outline-none font-ibm-plex"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Send_Message&nbsp;
                    <span className="text-xl">↗</span>
                  </motion.button>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-12 mt-16">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-primary-500 hover:text-blue-500 transition-colors duration-200 font-medium uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export { HomeScreen };
