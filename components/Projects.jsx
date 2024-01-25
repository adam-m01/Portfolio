import React from "react";
import Image from "next/image";
import glide from "../public/glide.webp";
import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";
import { RxOpenInNewWindow } from "react-icons/rx";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Projects = () => {
  return (
    <FadeInWhenVisible>
      <section>
        <div className="relative" id="three">
          <BackgroundCircle />
          <Content />
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

const BackgroundCircle = () => (
  <div
    className="absolute hidden overflow-hidden right-0 w-[30rem] h-[30rem] bg-gradient-to-r from-[#1CCDFF] to-[#b249f8] opacity-10 rounded-full blur-md lg:left-0 dark:bg-gradient-to-b lg:block"
    style={{ filter: "blur(100px)" }}
  ></div>
);

const Content = () => (
  <div className="mx-auto items-center lg:max-w-6xl select-none">
    <Title />
    <ProjectSection />
  </div>
);

const Title = () => (
  <div>
    <h3 className="text-3xl text-white dark:text-black py-3 pt-32 font-bold font-poppins xl:text-6xl md:text-6xl md:text-center lg:text-left">
      See My{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8]">
        Work.
      </span>
    </h3>
    <p className="text-sm lg:text-lg md:text-base text-white dark:text-black  md:text-center lg:text-left">
      Recent projects I've been working on
    </p>
  </div>
);

const ProjectSection = () => (
  <section className="py-5 max-w-lg lg:max-w-7xl md:mx-auto ">
    <div className="mx-auto lg:flex gap-5">
      <ProjectImage />
      <ProjectDetails />
    </div>
  </section>
);

const ProjectImage = () => (
  <div className="overflow-hidden rounded-xl">
    <Image
      src={glide}
      width={500}
      height="auto"
      alt="glide"
      className="object-cover rounded-xl pointer-events-none"
    />
  </div>
);

const ProjectDetails = () => (
  <div className="text-left pt-7 w-full lg:w-1/2 lg:pt-0 ">
    <h3 className="text-xl lg:text-2xl font-bold text-white dark:text-black">
      Glide
    </h3>
    <p className="text-md py-2 leading-8 text-white dark:text-black">
      Deep Work/Pomodoro timer combined with a range of lo-fi playlists
    </p>
    <TechStack />
    <ProjectLinks />
  </div>
);

const TechStack = () => (
  <div className="flex items-center gap-4 py-4 text-white dark:text-black">
    <TechIcon icon={<FaHtml5 size={35} />} label="HTML" />
    <TechIcon icon={<FaCss3Alt size={35} />} label="CSS" />
    <TechIcon icon={<BiLogoJquery size={35} />} label="JQuery" />
  </div>
);

const TechIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center">
    {icon}
    <p className="text-white dark:text-black py-1 text-center">{label}</p>
  </div>
);

const ProjectLinks = () => (
  <div className="flex items-center gap-4 py-2 ">
    <VisitButton />
    <GitHubLink className="" />
  </div>
);

const VisitButton = () => (
  <a
    href="https://glide.adamurray.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit Project"
    className="w-20 flex border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] dark:bg-darkBg dark:border-transparent text-white py-2 px-2 rounded-lg"
  >
    <p className="text-white">Visit&nbsp;</p>
    <RxOpenInNewWindow size={22} />
  </a>
);

const GitHubLink = () => (
  <a
    href="https://github.com/adam-m01/Glide"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit GitHub"
  >
    <FaGithub className="text-white dark:text-black" size={35} />
  </a>
);

export default Projects;
