"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Header } from "@/components/Features/header";
import { Footer } from "@/components/Features/footer";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const scrollY = useMotionValue(0);

  const smoothY = useSpring(scrollY, {
    mass: 1,
    stiffness: 50,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const updateContentHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.scrollHeight;
        setContentHeight(height);
        document.body.style.height = `${height}px`;
      }
    };

    updateContentHeight();

    const handleScroll = () => {
      scrollY.set(-window.scrollY);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const currentScroll = -scrollY.get();
      const maxScroll = contentHeight - window.innerHeight;
      const newScroll = Math.max(
        0,
        Math.min(maxScroll, currentScroll + e.deltaY * 3)
      );
      window.scrollTo(0, newScroll);
    };

    // Initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", updateContentHeight);

    const timer = setTimeout(updateContentHeight, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateContentHeight);
      clearTimeout(timer);
      document.body.style.height = "";
    };
  }, [children, contentHeight, scrollY]);

  return (
    <motion.div
      className="w-screen fixed top-0 flex flex-col min-h-screen bg-background"
      ref={contentRef}
      style={{ y: smoothY }}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </motion.div>
  );
};

export { LayoutWrapper };
