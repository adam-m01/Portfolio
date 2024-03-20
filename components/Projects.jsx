import React from "react";
import Image from "next/image";
import { FaGithub, FaAws, FaDocker, FaCloudflare, FaJenkins, FaWordpress } from "react-icons/fa";
import { SiTerraform, SiTraefikproxy, SiPortainer } from "react-icons/si";
import { TbBrandNextjs  } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import FadeInWhenVisible from "./FadeInWhenVisible";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1020, 
        settings: "unslick",
      },
    ],
  };

  const projectData = [
    {
      title: "Streamlining Next.js Deployment on AWS with CI/CD",
      description: "Simplifying Next.js deployment with the implementation of a streamlined CI/CD pipeline",
      imageSrc: "/nextjs_jenkins.webp",
      technologies: [
        { icon: <FaJenkins size={35} />, name: "Jenkins" },
        { icon: <TbBrandNextjs size={35} />, name: "Next.js" },
        { icon: <FaDocker size={35} />, name: "Docker" },
      ],
      visitLink: "https://blog.adamurray.com/streamlining-next-js-deployment-on-aws-with-ci-cd/",

    },
    {
      title: "Website Deployment with Terragrunt for AWS and Cloudflare", 
      description: "Terraform and Terragrunt configurations for deploying static websites on AWS S3",
      imageSrc: "/S3_Terraform.webp",
      technologies: [
        { icon: <SiTerraform size={35} />, name: "Terraform" },
        { icon: <FaAws size={35} />, name: "AWS" },
        { icon: <FaCloudflare size={35} />, name: "Cloudflare" },

      ],
      visitLink: "https://github.com/adam-m01/Terraform-S3-Static-Website",
    },
    {
      title: "Project Blog",
      description: "Self hosted project based blog to showcase a progression platform for sharing insights, discoveries, and accomplishments",
      imageSrc: "/project_blog.webp",
      technologies: [
        { icon: <SiPortainer size={35} />, name: "Portainer" },
        { icon: <SiTraefikproxy size={35} />, name: "Traefik" },
        { icon: <FaWordpress size={35} />, name: "Wordpress" },
      ],
      visitLink: "https://blog.adamurray.com/",
    },
  ];

return (
  <FadeInWhenVisible>
    <section className="relative select-none " id="three">
      <BackgroundCircle />
      <div className="mx-auto items-center lg:max-w-6xl select-none">
      <Content projects={projectData} settings={settings} />
      </div>
    </section>
  </FadeInWhenVisible>
);
};

const BackgroundCircle = () => (
  <div className="absolute hidden overflow-hidden right-0 w-[30rem] h-[30rem] bg-gradient-to-r from-[#1CCDFF] to-[#b249f8] opacity-10 rounded-full blur-md lg:left-0 dark:bg-gradient-to-b lg:block" style={{ filter: "blur(100px)" }}></div>
);

const Content = ({ projects, settings }) => (
  <div className="mx-auto py-12 lg:max-w-7xl select-none">
    <Title />
    <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
    <div className="lg:hidden">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-2"> 
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
      <div className="text-center text-white dark:text-black">
        Swipe for more →
      </div>
    </div>
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

const ProjectCard = ({ project }) => (
  <div className="flex flex-col bg-[rgba(42,43,56,.5)] dark:bg-darkBg rounded-xl mx-auto sm:w-[60%] lg:w-full shadow-lg overflow-hidden h-full my-5 ">
    <div className="w-full overflow-hidden rounded-t-lg">
      <ProjectImage imageSrc={project.imageSrc} alt={project.title} />
    </div>
    <div className="flex flex-col p-5 flex-grow min-h-[380px] lg:min-h-0">
      <h3 className="text-xl lg:text-2xl font-bold text-white dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="flex-grow text-md py-2 text-white dark:text-white">
        {project.description}
      </p>
      <div className="mt-auto">
        <TechStack technologies={project.technologies} />
        <ProjectLinks visitLink={project.visitLink} githubLink={project.githubLink} />
      </div>
    </div>
  </div>
);


const ProjectImage = ({ imageSrc, alt }) => (
  <div className="w-full overflow-hidden rounded-t-lg select-none">
    <Image src={imageSrc} width={500} height={281} alt={alt} layout="responsive" className="object-cover" />
  </div>
);



const TechStack = ({ technologies }) => (
  <div className="flex items-center  gap-4 pb-4 text-white dark:text-white justify-center ">
    {technologies.map((tech, index) => (
      <TechIcon key={index} icon={tech.icon} label={tech.name} />
    ))}
  </div>
);

const TechIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center ">
    {icon}
    <p className="text-center pt-1">{label}</p>
  </div>
);

const ProjectLinks = ({ visitLink, githubLink }) => (
  <div className="flex items-center gap-4 py-2 justify-center ">
    {visitLink && <VisitButton link={visitLink} />}
    {githubLink && <GitHubLink link={githubLink} />}
  </div>
);

const VisitButton = ({ link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Visit Project" className="flex items-center border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] dark:bg-transparent dark:border-white text-white py-2 px-2 rounded-lg">
    <p>Visit&nbsp;</p>
    <RxOpenInNewWindow size={22} />
  </a>
);

const GitHubLink = ({ link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub">
    <FaGithub className="text-white dark:text-white" size={35} />
  </a>
);

export default Projects;
