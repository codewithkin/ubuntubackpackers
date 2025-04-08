"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface AnimateIntoViewProps {
  children: React.ReactNode;
  className?: string;
}

const AnimateIntoView: React.FC<AnimateIntoViewProps> = ({
  children,
  className,
}) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Trigger animation when element enters the viewport
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check if it's already in view initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.6 }}
      style={{ overflow: "hidden" }} // Ensures no overflow during animation
    >
      {children}
    </motion.div>
  );
};

export default AnimateIntoView;
