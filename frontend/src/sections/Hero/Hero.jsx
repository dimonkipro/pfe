import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.7], [1, 0.4, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <motion.section ref={targetRef} style={{ opacity, minHeight: "100vh" }}>
      <motion.div
        style={{
          left: "40%",
          scale,
          position,
          fontSize: "2rem",
        }}
      >
        <h1>Hero Section</h1>
        <h1>Hero Section</h1>
        <h1>Hero Section</h1>
        <h1>Hero Section</h1>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
