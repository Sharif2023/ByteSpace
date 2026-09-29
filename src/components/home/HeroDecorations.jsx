import React from 'react';
import { motion } from 'framer-motion';
import { 
  LimeTorus,
  LimeScribble,
  WhiteScribble,
  WhitePyramid
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
      {/* Flat neon green squiggle on the top left */}
      <motion.div 
        custom={0}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-28 left-6 sm:left-12 pointer-events-none hidden md:block"
      >
        <LimeScribble className="w-32 h-44" />
      </motion.div>
      
      {/* Flat neon green ring on the bottom left */}
      <motion.div 
        custom={1}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute bottom-24 left-[10%] pointer-events-none hidden lg:block"
      >
        <LimeTorus className="w-36 h-36" rotate={15} />
      </motion.div>
      
      {/* Flat white triangle on the right side */}
      <motion.div 
        custom={2}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-32 right-12 sm:right-24 pointer-events-none hidden md:block"
      >
        <WhitePyramid className="w-28 h-28" />
      </motion.div>

      {/* Flat white squiggle on the right side */}
      <motion.div 
        custom={3}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute bottom-32 right-[12%] pointer-events-none hidden lg:block"
      >
        <WhiteScribble className="w-32 h-44" style={{ transform: 'scaleX(-1)' }} />
      </motion.div>
    </>
  );
}
