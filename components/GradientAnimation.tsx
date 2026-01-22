"use client"
import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect } from 'react';

export default function GradientAnimation() {
  const bgPosition = useMotionValue("50% 0%");
  
  useEffect(() => {
    const controls = animate(bgPosition, 
      ["50% 0%", "50% 100%", "50% 0%"], 
      {
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }
    );
    return controls.stop;
  }, []);

  return (
    <motion.div
      className="relative w-full h-screen"
      style={{
        backgroundImage: "linear-gradient(180deg, #B0D2DE 0%, #F2EFE5 15%, #FF76A2 26%, #613B38 40%, #613B38 44%, #E7303A 55%, #DFCDFF 68%, #B0D2DE 78%, #F2EFE5 89%, #B0D2DE 100%)",
        backgroundSize: "400% 400%",
        backgroundPosition: bgPosition,
      }}
    >
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Fable</h1>
      </div>
    </motion.div>
  );
}