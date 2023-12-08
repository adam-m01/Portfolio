import React from "react";
import {
  HiMiniPaintBrush,
  HiMiniCog6Tooth,
  HiMiniCloudArrowUp,
} from "react-icons/hi2";
import { SiTailwindcss, SiVmware } from "react-icons/si";
import { FaReact, FaAws, FaDocker, FaPython } from "react-icons/fa";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import { BiLogoJavascript } from "react-icons/bi";
import FadeInWhenVisible from "./FadeInWhenVisible";
const Stack = () => {
  return (
    <FadeInWhenVisible>
      <section
        className="mx-auto items-center  lg:max-w-6xl select-none"
        id="two"
      >
        <div
          className="absolute hidden overflow-hidden right-0 w-[30rem] h-[30rem] bg-gradient-to-r from-[#1CCDFF] to-[#b249f8] opacity-10 rounded-full blur-md dark:bg-gradient-to-b  lg:block"
          style={{
            filter: "blur(100px)",
          }}
        ></div>
        <div>
          <h3 className="text-5xl text-white text-left py-3 pt-32 font-bold font-poppins xl:text-7xl dark:text-darkText ">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8] dark:bg-gradient-to-b ">
              Stack.
            </span>{" "}
          </h3>
          <p className="text-mb py-2 leading-8 text-left text-white dark:text-darkText">
            Check out what technologies I like to work with!
          </p>
        </div>

        <div className="lg:flex md:flex md:flex-wrap lg:flex-nowrap items-center justify-center gap-10 ">
          <div className="text-center p-10 rounded-xl my-10 bg-[rgba(42,43,56,.5)]  dark:bg-darkBg  md:w-2/5 lg:w-1/3">
            <h3 className="text-2xl font-bold pb-5 text-white ">Front End</h3>
            <HiMiniPaintBrush className="mx-auto text-white " size={50} />
            <h3 className="text-lg font-medium pt-5 text-white">
              Designing & Development
            </h3>

            <div className="flex items-center  gap-4 pt-10 justify-center">
              <div className="flex flex-col items-center mr-4">
                <FaReact className="text-white" size={35} />
                <p className="text-white py-1 text-center">React</p>
              </div>

              <div className="flex flex-col items-center mr-4">
                <TbBrandNextjs className="text-white" size={35} />
                <p className="text-white py-1 text-center">Next.js</p>
              </div>

              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-white" size={35} />
                <p className="text-white py-1 text-center">Tailwind</p>
              </div>
            </div>
          </div>

          <div className="text-center p-10 rounded-xl my-10 bg-[rgba(42,43,56,.5)] dark:bg-darkBg md:w-2/5 lg:w-1/3">
            <h3 className="text-2xl font-bold  pb-5 text-white">Back End</h3>
            <HiMiniCog6Tooth className="mx-auto text-white " size={50} />
            <h3 className="text-lg font-medium pt-5  text-white">
            Development & Functionality 
            </h3>

            <div className="flex items-center gap-4 pt-10 justify-center">
              <div className="flex flex-col items-center mr-4">
                <BiLogoJavascript className="text-white" size={35} />
                <p className="text-white py-1 text-center">JS</p>
              </div>

              <div className="flex flex-col items-center mr-4">
                <TbSql className="text-white" size={35} />
                <p className="text-white py-1 text-center">SQL</p>
              </div>

              <div className="flex flex-col items-center">
                <FaPython className="text-white" size={35} />
                <p className="text-white py-1 text-center">Python</p>
              </div>
            </div>
          </div>

          <div className="text-center p-10 rounded-xl my-10 bg-[rgba(42,43,56,.5)] dark:bg-darkBg md:w-2/5 lg:w-1/3">
            <h3 className="text-2xl font-bold  pb-5 text-white">
              Infrastructure
            </h3>
            <HiMiniCloudArrowUp className="mx-auto text-white " size={50} />
            <h3 className="text-lg font-medium pt-5  text-white">
              Deploying & Maintaining
            </h3>

            <div className="flex items-center gap-4 pt-10 justify-center">
              <div className="flex flex-col items-center mr-4">
                <FaAws className="text-white" size={35} />
                <p className="text-white py-1 text-center">AWS</p>
              </div>

              <div className="flex flex-col items-center mr-4">
                <FaDocker className="text-white" size={35} />
                <p className="text-white py-1 text-center">Docker</p>
              </div>

              <div className="flex flex-col items-center">
                <SiVmware className="text-white" size={35} />
                <p className="text-white py-1 text-center">VMware</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default Stack;
