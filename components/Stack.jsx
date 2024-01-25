import React from "react";
import { BiLogoJavascript } from "react-icons/bi";
import {
  HiMiniPaintBrush,
  HiMiniCog6Tooth,
  HiMiniCloudArrowUp,
} from "react-icons/hi2";
import { FaReact, FaAws, FaDocker, FaPython } from "react-icons/fa";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import { SiTailwindcss, SiVmware } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeInWhenVisible from "./FadeInWhenVisible";

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
      description: "Deployment",
      technologies: [
        <FaAws size={35} />,
        <FaDocker size={35} />,
        <SiVmware size={35} />,
      ],
      techNames: ["AWS", "Docker", "VMware"],
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        },
      },
    ],
  };

  return (
    <FadeInWhenVisible>
      <section>
        <div className="relative" id="two">
          <BackgroundCircle />
          <div className="mx-auto items-center lg:max-w-6xl select-none">
            <ContentTitle />
            <StackContent sections={sections} settings={settings} />
          </div>
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

const ContentTitle = () => (
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
  <div className="relative z-10 text-white">
    <div className="hidden lg:grid lg:grid-cols-3 lg:mx-2 xl:mx-0">
      {sections.map((section, index) => (
        <div key={index} className="p-2">
          <SectionCard section={section} />
        </div>
      ))}
    </div>
    <div className="lg:hidden rounded-xl">
      <Slider {...settings} className="custom-slider">
        {sections.map((section, index) => (
          <div key={index} className="p-2">
            <SectionCard section={section} />
          </div>
        ))}
      </Slider>
    </div>
    <div className="text-center text-white dark:text-black  md:hidden">
      Swipe for more →
    </div>
  </div>
);

const SectionCard = ({ section }) => (
  <div className="text-center p-10 bg-[rgba(42,43,56,.5)] dark:bg-darkBg rounded-xl my-5">
    <div className="flex justify-center">{section.icon}</div>
    <h3 className="text-xl font-bold pt-5">{section.title}</h3>
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
  <div className="flex flex-col items-center">
    {tech}
    <p className="text-white py-1 text-center">{techName}</p>
  </div>
);

export default Stack;
