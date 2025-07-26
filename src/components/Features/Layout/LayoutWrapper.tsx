"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Header } from "@/components/Features/header";
import { Footer } from "@/components/Features/footer";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - windowHeight);
  });

  useEffect(() => {
    const updateHeights = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    const timer = setTimeout(updateHeights, 100);

    return () => {
      window.removeEventListener("resize", updateHeights);
      clearTimeout(timer);
    };
  }, [children]);

  return (
    <>
      <div style={{ height: contentHeight }} />

      <motion.div
        className="w-screen fixed top-0 flex flex-col min-h-screen bg-background"
        ref={contentRef}
        style={{ y }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </motion.div>
    </>
  );
};

export { LayoutWrapper };
