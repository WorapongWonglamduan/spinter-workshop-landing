"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxScrollProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxScroll({ children, offset = 50, className = "" }: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.6"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  
  const yOffset = direction === "up" ? 100 : direction === "down" ? -100 : 0;
  const xOffset = direction === "left" ? 100 : direction === "right" ? -100 : 0;
  
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);
  const x = useTransform(scrollYProgress, [0, 1], [xOffset, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y, x }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRotateProps {
  children: ReactNode;
  rotation?: number;
  className?: string;
}

export function ScrollRotate({ children, rotation = 15, className = "" }: ScrollRotateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-rotation, rotation]);
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ rotate: smoothRotate }} className={className}>
      {children}
    </motion.div>
  );
}

interface ScrollScaleProps {
  children: ReactNode;
  scaleRange?: [number, number];
  className?: string;
}

export function ScrollScale({
  children,
  scaleRange = [0.8, 1.2],
  className = "",
}: ScrollScaleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], 1, scaleRange[1]]);
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ scale: smoothScale }} className={className}>
      {children}
    </motion.div>
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#213559] via-[#3a5b8c] to-[#213559] origin-left z-40"
      style={{ scaleX }}
    />
  );
}

interface StickyScrollProps {
  children: ReactNode;
  className?: string;
}

export function StickyScroll({ children, className = "" }: StickyScrollProps) {
  return (
    <div className={`sticky top-20 ${className}`}>
      {children}
    </div>
  );
}

interface ScrollFadeProps {
  children: ReactNode;
  fadeRange?: [number, number];
  className?: string;
}

export function ScrollFade({
  children,
  fadeRange = [0, 1],
  className = "",
}: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [fadeRange[0], fadeRange[1], fadeRange[1], fadeRange[0]]);

  return (
    <motion.div ref={ref} style={{ opacity }} className={className}>
      {children}
    </motion.div>
  );
}

interface ScrollBlurProps {
  children: ReactNode;
  className?: string;
}

export function ScrollBlur({ children, className = "" }: ScrollBlurProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, 10]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <motion.div ref={ref} style={{ filter }} className={className}>
      {children}
    </motion.div>
  );
}

interface ScrollPerspectiveProps {
  children: ReactNode;
  className?: string;
}

export function ScrollPerspective({ children, className = "" }: ScrollPerspectiveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -45]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        opacity,
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
