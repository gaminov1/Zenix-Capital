// components/ScrollAnimation.tsx
"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const ScrollAnimation = ({
  children,
  className = "",
  delay = 0,
  yOffset = 20, // Reduced from 50 for smoother entry
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Lower threshold for earlier trigger
    rootMargin: "-50px 0px", // Starts animating 50px before element enters viewport
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring", // Smoother spring physics
        damping: 20, // Controls bounce
        stiffness: 100, // Controls speed
        mass: 0.5, // Controls weightiness
        delay: delay * 0.15, // Reduced delay multiplier
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};