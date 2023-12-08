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
      <div
        className="absolute hidden overflow-hidden right-0 w-[30rem] h-[30rem] bg-gradient-to-r from-[#1CCDFF] to-[#b249f8] opacity-10 rounded-full blur-md lg:left-0 lg:block"
        style={{
          filter: "blur(100px)",
        }}
      ></div>
      <section
        className="mx-auto  items-center lg:max-w-6xl select-none "
        id="three"
      >
        <div>
          <h3 className="text-5xl text-white text-left pt-32 py-3 font-bold font-poppins dark:text-darkText xl:text-7xl">
            See My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8] dark:bg-gradient-to-b ">
              Work.
            </span>{" "}
          </h3>
          <p className="text-mb py-2 leading-8 text-left text-white dark:text-darkText">
            Check out some recent projects I've been working on!
          </p>
        </div>
        <div className=" ">
          <section className="mx-auto items-center rounded-xl my-10 lg:max-w-7xl  ">
            <div className="mx-auto lg:flex gap-5 md:mx-40 lg:mx-auto">
              <div className="overflow-hidden rounded-xl ">
                <div>
                  <Image
                    src={glide}
                    width={500}
                    height="auto"
                    alt="glide"
                    className="object-cover rounded-xl  "
                  />
                </div>
              </div>

              <div className="text-left pt-7 w-full lg:w-1/2 lg:pt-0">
                <h3 className="text-2xl font-bold  text-white dark:text-darkText first-letter:">
                  Glide
                </h3>
                <p className="text-lg py-2 leading-8  text-white dark:text-darkText ">
                  Deep Work/Pomodoro timer combined with a range of lo-fi
                  playlists
                </p>

                <div className="flex items-center justify-normal gap-4 py-4 ">
                  <div className="flex flex-col items-center mr-4 ">
                    <FaHtml5
                      className="dark:fill-darkText text-white"
                      size={35}
                    />
                    <p className="text-white  dark:text-darkText py-1 text-center">
                      HTML
                    </p>
                  </div>

                  <div className="flex flex-col items-center mr-4">
                    <FaCss3Alt
                      className="dark:fill-darkText text-white"
                      size={35}
                    />
                    <p className="text-white  dark:text-darkText py-1 text-center">
                      CSS
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <BiLogoJquery
                      className="dark:fill-darkText text-white"
                      size={35}
                    />
                    <p className="text-white dark:text-darkText py-1 text-center">
                      JQuery
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-normal gap-4 py-2">
                  <a
                    href="https://glide.adamurray.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Project"
                  >
                    <button className=" w-20 flex border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] dark:bg-darkBg dark:border-transparent text-white py-2 px-2 rounded-lg">
                      <p className="text-white">Visit&nbsp;</p>
                      <RxOpenInNewWindow size={22} />
                    </button>
                  </a>
                  <a
                    href="https://github.com/adam-m01/Glide"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit GithHub"
                  >
                    <FaGithub
                      className="dark:fill-darkText text-white"
                      size={35}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default Projects;
