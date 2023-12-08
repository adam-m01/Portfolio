import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInWhenVisible = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4, 
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
