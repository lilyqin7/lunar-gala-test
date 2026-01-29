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
      <div className="relative w-full h-screen overflow-hidden">
        <div className="row24px">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
        </div>
        <div className="row24px">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
        </div>
        <div className="row48px">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
        </div>
        <div className="row-eighth">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v3"> </div>
        </div>
        <div className="row-quarter">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
        </div>
        <div className="row-half">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
        </div>
        <div className="row-full">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
        </div>
        <div className="row-half">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
        </div>
        <div className="row-quarter">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
        </div>
        <div className="row-eighth">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
        </div>
        <div className="row48px">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
        </div>
        <div className="row24px">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
        </div>
        <div className="row24px">
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v3"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-full gradient-vertical" id="gradient-animation-v2"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v4"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-half gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
          <div className="rectangle-small gradient-vertical" id="gradient-animation-v1"> </div>
        </div>
      </div>
    </div>
  );
}
