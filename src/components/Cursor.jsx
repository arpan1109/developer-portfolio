import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for the instantly following dot
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Spring physics for the trailing ring (adjust stiffness/damping for different feels)
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const ringX = useSpring(dotX, springConfig);
  const ringY = useSpring(dotY, springConfig);

  useEffect(() => {
    // Update coordinates on mouse move
    const moveCursor = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    // Detect if hovering over a clickable element
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".group")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [dotX, dotY]);

  // If the user is on a mobile device, we shouldn't render the custom cursor
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* 1. The Instant Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHovered ? 0 : 1, // Hide the dot when hovering over links
        }}
        transition={{ duration: 0.2 }}
      />

      {/* 2. The Trailing Spring Ring */}
      <motion.div
        // Changed to border-2 for thickness, added a shadow for the bright glow
        className="fixed top-0 left-0 w-8 h-8 border-2 rounded-full pointer-events-none z-[9998] shadow-[0_0_15px_rgba(34,211,238,0.4)]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          // Slightly brighter background tint on hover
          backgroundColor: isHovered
            ? "rgba(34, 211, 238, 0.15)"
            : "transparent",
          // Cranked up the border opacity to 1 (100%) on hover and 0.8 resting
          borderColor: isHovered
            ? "rgba(34, 211, 238, 1)"
            : "rgba(34, 211, 238, 0.8)",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
