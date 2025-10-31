"use client";
import { motion } from "framer-motion";

export default function MotionFade({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </motion.div>
  );
}
