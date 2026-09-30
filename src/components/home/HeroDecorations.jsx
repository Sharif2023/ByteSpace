import React from 'react';
import { motion } from 'framer-motion';
import { 
  LimeScribble,
  WhiteScribble,
  WhitePyramid,
  LimeCylinder
} from '../common/Decorations';

const shapeVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 40 },
  visible: (custom) => ({
    opacity: 0.9,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 70,
      delay: custom * 0.2,
      duration: 0.8
    }
  })
};

export default function HeroDecorations() {
  return (
    <>

      {/* Top Left: Large Lime Twister */}
      <motion.div 
        custom={0}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-16 left-0 lg:-left-4 z-10 pointer-events-none hidden md:block"
      >
        <LimeScribble className="w-56 lg:w-72" />
      </motion.div>

      {/* Top Left (Inner): Small White Twister */}
      <motion.div 
        custom={0.5}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-44 left-24 lg:top-64 lg:left-40 z-0 pointer-events-none hidden md:block"
      >
        <WhiteScribble className="w-32 lg:w-48 transform -scale-x-100" />
      </motion.div>
      
      {/* Middle Right (Inner): White Cone */}
      <motion.div 
        custom={1}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-64 right-[15%] lg:right-32 pointer-events-none hidden md:block"
      >
        <WhitePyramid className="w-20 h-20 lg:w-28 lg:h-28" />
      </motion.div>

      {/* Middle Right (Edge): Lime Cylinder */}
      <motion.div 
        custom={1.5}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-52 -right-8 pointer-events-none hidden md:block"
      >
        <LimeCylinder className="w-36 h-48 lg:w-44 lg:h-60" />
      </motion.div>
    </>
  );
}
