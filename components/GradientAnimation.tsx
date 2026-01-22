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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background animated gradient layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(180deg, #B0D2DE 0%, #F2EFE5 15%, #FF76A2 26%, #613B38 40%, #613B38 44%, #E7303A 55%, #DFCDFF 68%, #B0D2DE 78%, #F2EFE5 89%, #B0D2DE 100%)",
          backgroundSize: "100% 400%",
          backgroundPosition: bgPosition,
        }}
      />
      
      {/* Grid of squares */}
      <div className="relative z-10 grid grid-cols-5 gap-4 h-full p-4">
        {/* Empty squares - background shows through */}
        <div className="border border-black bg-transparent" />
        <div className="border border-black bg-transparent" />
        <div className="border border-black bg-transparent" />
        <div className="border border-black bg-transparent" />
        <div className="border border-black bg-transparent" />
        
        <div className="border border-black bg-transparent" />
        <div className="border border-black bg-transparent" />
        <div className="border border-black bg-transparent" />
        <div className="border border-black bg-transparent" />
        <div className="border border-black bg-transparent" />

        <div className="border border-black bg-transparent" />
        <div className="border border-black bg-transparent" />
        <div className="border border-black bg-transparent" />
        <div className="border border-black bg-transparent" />
        <div className="border border-black bg-transparent" />
      </div>
    </div>
  );
}
