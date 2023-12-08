import { useState,  useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import mainPortrait from '../public/main-portrait.webp';


const Main = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    // Set initial desktop state
    setIsDesktop(window.innerWidth > 768);

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-row justify-center">
      <section className="pb-40  flex flex-col items-center select-none">
        {/* 
      <div
        className="hidden absolute  w-[35rem] h-[35rem] bg-gradient-to-r from-[#1CCDFF] to-[#b249f8] opacity-10 rounded-full blur-md lg:block "
        style={{
          filter: "blur(100px)",
        }}
      ></div> */}
        <div className="text-center">
          <motion.h3
            initial={{ y: 0 }}
            animate={{ y: isDesktop && isHovered ? -25 : 0 }}
            className="text-2xl text-white dark:text-black md:text-3xl xl:mt-10"
          >
            Hello👋, I'm
          </motion.h3>

          <motion.h2
            initial={{ y: 0 }}
            animate={{ y: isDesktop && isHovered ? -25 : 0 }}
            className="text-8xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8] md:text-8xl xl:text-8xl dark:bg-gradient-to-b "
          >
            Adam
          </motion.h2>

          {isDesktop && (
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              initial={{ y: 0 }}
              animate={{ y: isHovered ? 25 : 0 }}
              className="relative mt-[-18%] mx-auto rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96 md:mt-[-18%] xl:mt-[-18%]"
            >
              <Image src={mainPortrait} alt="Main Portrait"  loading="eager" />
            </motion.div>
          )}

          {!isDesktop && (
            <div className="relative mt-[-18%] mx-auto rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96 md:mt-[-18%] xl:mt-[-18%]">
              <Image src={mainPortrait} alt="Main Portrait" loading="eager" />
            </div>
          )}
        </div>

        <motion.h3
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          initial={{ y: 0 }}
          animate={{ y: isDesktop && isHovered ? 25 : 0 }}
          className="text-xl mt-[-8%] text-white dark:text-black md:text-xl xl:text-2xl"
        >
          Designer{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8] dark:bg-gradient-to-b">
            {" "}
            //
          </span>{" "}
          Developer
        </motion.h3>

        <div className="text-lg pt-10 lg:hidden">
          <a href="#three">
            <button className="w-52 border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] text-white py-2 px-4 rounded-lg dark:bg-darkBg dark:border-darkBorder" aria-label="Visit Project">
              Projects
            </button>
          </a>
        </div>

        <div className="scroll-container mt-20 lg:mt-48 dark:bg-darkBg ">
          <div className="scroller "></div>
        </div>
      </section>
    </div>
  );
};

export default Main;