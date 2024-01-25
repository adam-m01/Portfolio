import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const FadeInWhenVisible = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: isMobile ? 0.5 : 0.7,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : -50,
      }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
