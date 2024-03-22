import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact, FaDocker, FaPython, FaJenkins } from "react-icons/fa";
import { SiTerraform} from "react-icons/si";
import {
  HiMiniPaintBrush,
  HiMiniCog6Tooth,
  HiMiniCloudArrowUp,
} from "react-icons/hi2";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const Stack = () => {
  const sections = [
    {
      title: "Front End",
      icon: <HiMiniPaintBrush size={50} />,
      description: "Development",
      technologies: [
        <FaReact size={35} />,
        <TbBrandNextjs size={35} />,
        <SiTailwindcss size={35} />,
      ],
      techNames: ["React", "Next.js", "Tailwind"],
    },
    {
      title: "Back End",
      icon: <HiMiniCog6Tooth size={50} />,
      description: "Functionality",
      technologies: [
        <BiLogoJavascript size={35} />,
        <TbSql size={35} />,
        <FaPython size={35} />,
      ],
      techNames: ["JS", "SQL", "Python"],
    },
    {
      title: "Infrastructure",
      icon: <HiMiniCloudArrowUp size={50} />,
      description: "Orchestration",
      technologies: [
        <FaDocker size={35} />,
        <SiTerraform size={35} />,
        <FaJenkins size={35} />,
      ],
      techNames: ["Docker", "Terraform", "Jenkins"],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <FadeInWhenVisible>
      <section className="relative" id="two">
        <BackgroundCircle />
        <div className="mx-auto py-12 lg:max-w-6xl select-none">
          <StackHeader />
          <StackContent sections={sections} settings={settings} />
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

const BackgroundCircle = () => (
  <div
    className="absolute hidden overflow-hidden right-0 w-[30rem] h-[30rem] bg-gradient-to-r from-[#1CCDFF] to-[#b249f8] opacity-10 rounded-full blur-md  dark:bg-gradient-to-b lg:block"
    style={{ filter: "blur(100px)" }}
  ></div>
);
const StackHeader = () => (
  <div>
    <h3 className="text-3xl text-white dark:text-black py-3 pt-32 font-bold font-poppins xl:text-6xl md:text-6xl md:text-center lg:text-left">
      My{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8]">
        Stack.
      </span>
    </h3>
    <p className="text-sm lg:text-lg md:text-base text-white dark:text-black md:text-center lg:text-left">
      Technologies I like to work with
    </p>
  </div>
);

const StackContent = ({ sections, settings }) => (
  <div>
    <SliderView sections={sections} settings={settings} />
    <GridView sections={sections} />
  </div>
);

const SliderView = ({ sections, settings }) => (
  <div className="lg:hidden">
    <Slider {...settings}>
      {sections.map((section, index) => (
        <div key={index} className="px-2">
          <SectionCard section={section} />
        </div>
      ))}
    </Slider>
    <div className="text-center text-white dark:text-black">
      Swipe for more →
    </div>
  </div>
);

const GridView = ({ sections }) => (
  <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
    {sections.map((section, index) => (
      <SectionCard key={index} section={section} />
    ))}
  </div>
);

const SectionCard = ({ section }) => (
  <div className="text-center p-10 bg-[rgba(42,43,56,.5)] dark:bg-darkBg rounded-xl my-5 mx-auto sm:w-[60%] lg:w-full">
    <div className="flex text-white dark:text-white justify-center">{section.icon}</div>
    <h3 className="text-xl text-white dark:text-white font-bold pt-5">{section.title}</h3>
    <h3 className="text-md lg:text-lg font-medium text-white">
      {section.description}
    </h3>
    <div className="flex items-center gap-4 pt-8 justify-center">
      {section.technologies.map((tech, techIndex) => (
        <TechIcon
          key={techIndex}
          tech={tech}
          techName={section.techNames[techIndex]}
        />
      ))}
    </div>
  </div>
);

const TechIcon = ({ tech, techName }) => (
  <div className="flex text-white dark:text-white flex-col items-center ">
    {tech}
    <p className="text-white dark:text-white pt-1 text-center ">{techName}</p>
  </div>
);

export default Stack;
