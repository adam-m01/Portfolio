import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const useResizeListener = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
};

const MotionText = ({
  children,
  className,
  yOffset,
  isDesktop,
  isHovered,
  handleHover,
}) => {
  return (
    <motion.div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      initial={{ y: 0 }}
      animate={{ y: isDesktop && isHovered ? yOffset : 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Main = () => {
  const isDesktop = useResizeListener();
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = (hovered) => setIsHovered(hovered);

  return (
    <section>
      <div className="flex flex-col items-center justify-center h-screen lg:h-[88vh] select-none">
        <div className="text-center mt-16 lg:mt-0">
          <MotionText
            className="text-2xl text-white dark:text-black md:text-3xl xl:mt-10"
            yOffset={-25}
            isDesktop={isDesktop}
            isHovered={isHovered}
            handleHover={handleHover}
          >
            Hello👋, I'm
          </MotionText>

          <MotionText
            className="text-7xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8] lg:text-8xl dark:bg-gradient-to-b"
            yOffset={-25}
            isDesktop={isDesktop}
            isHovered={isHovered}
            handleHover={handleHover}
          >
            Adam
          </MotionText>

          <MotionText
            className="relative mt-[-18%] mx-auto rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96 xl:mt-[-18%]"
            yOffset={25}
            isDesktop={isDesktop}
            isHovered={isHovered}
            handleHover={handleHover}
          >
            <Image
              src="/main-portrait.webp"
              alt="Main Portrait"
              width={400}
              height={400}
              className="pointer-events-none"
              priority
            />
          </MotionText>

          <MotionText
            className="text-xl mt-[-8%] text-white dark:text-black md:text-xl xl:text-2xl"
            yOffset={25}
            isDesktop={isDesktop}
            isHovered={isHovered}
            handleHover={handleHover}
          >
            Designer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8] dark:bg-gradient-to-b">
              //
            </span>{" "}
            Developer
          </MotionText>
        </div>

        <div className="text-lg pt-10 lg:hidden">
          <ScrollLink
            to="three"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <button
              className="w-52 border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] text-white py-2 px-4 rounded-lg dark:bg-darkBg dark:border-darkBorder"
              aria-label="Visit Project"
            >
              Projects
            </button>
          </ScrollLink>
        </div>
      </div>

      <div className="scroll-container justify-center mx-auto dark:bg-darkBg hidden md:block">
        <div className="scroller"></div>
      </div>
    </section>
  );
};

export default Main;
