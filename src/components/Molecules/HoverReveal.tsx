"use client";

import { useState, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface HoverRevealProps {
  defaultContent: ReactNode;
  hoverContent: ReactNode;
  className?: string;
  hoverClassName?: string;
  animationConfig?: {
    duration?: number;
    ease?: readonly [number, number, number, number];
  };
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

const HoverReveal = ({
  defaultContent,
  hoverContent,
  className = "relative min-h-[80px] flex items-center",
  hoverClassName = "absolute right-20 flex items-center justify-center",
  animationConfig = {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1] as const,
  },
  onHoverStart,
  onHoverEnd,
}: HoverRevealProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    onHoverStart?.();
  }, [onHoverStart]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    onHoverEnd?.();
  }, [onHoverEnd]);

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence initial={false}>
        {!isHovered ? (
          <motion.div
            key="default"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={animationConfig}
          >
            {defaultContent}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {isHovered ? (
          <motion.div
            key="hover"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={animationConfig}
            className={hoverClassName}
          >
            {hoverContent}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export { HoverReveal };
