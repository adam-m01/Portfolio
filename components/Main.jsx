import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const useResizeListener = () => {
  // Initializing the state to `false` as a default, it will be updated in useEffect
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // This check ensures the code runs only in the browser where `window` is defined
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsDesktop(window.innerWidth > 768);
      };

      // Set initial desktop state
      handleResize();

      // Listen for window resize events
      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return isDesktop;
};

const Main = () => {
  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = useResizeListener();

  const imageMotionProps = {
    initial: { y: 0 },
    animate: { y: isDesktop && isHovered ? 25 : 0 },
  };

  const titleMotionProps = {
    initial: { y: 0 },
    animate: { y: isDesktop && isHovered ? -25 : 0 },
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center h-screen lg:h-[88vh]">
        <div className="text-center mt-16 lg:mt-0">
          {/* Titles */}
          <motion.h3
            {...titleMotionProps}
            className="text-2xl text-white dark:text-black md:text-3xl xl:mt-10"
          >
            Hello👋, I'm
          </motion.h3>
          <motion.h2
            {...titleMotionProps}
            className="text-7xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8] lg:text-8xl dark:bg-gradient-to-b"
          >
            Adam
          </motion.h2>

          {/* Image */}
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            {...imageMotionProps}
            className="relative mt-[-18%] mx-auto rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96 md:mt-[-18%] xl:mt-[-18%]"
          >
            <img
              src="/main-portrait.webp"
              alt="Main Portrait"
              loading="eager"
              width="100%"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.h3
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            {...imageMotionProps}
            className="text-xl mt-[-8%] text-white dark:text-black md:text-xl xl:text-2xl"
          >
            Designer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8] dark:bg-gradient-to-b">
              //
            </span>{" "}
            Developer
          </motion.h3>
        </div>

        {/* Project Button */}
        <div className="text-lg pt-10 lg:hidden">
          <a href="#three">
            <button
              className="w-52 border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] text-white py-2 px-4 rounded-lg dark:bg-darkBg dark:border-darkBorder"
              aria-label="Visit Project"
            >
              Projects
            </button>
          </a>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="scroll-container justify-center mx-auto dark:bg-darkBg hidden md:block">
        <div className="scroller"></div>
      </div>
    </section>
  );
};

export default Main;
