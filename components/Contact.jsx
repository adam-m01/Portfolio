import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { IoMdMail } from "react-icons/io";
import FadeInWhenVisible from "./FadeInWhenVisible";
const Contact = () => {
  return (
    <FadeInWhenVisible>
      <div
        className="absolute hidden overflow-hidden right-0 w-[30rem] h-[30rem] bg-gradient-to-r from-[#1CCDFF] to-[#b249f8] dark:bg-gradient-to-b  opacity-10 rounded-full blur-md lg:block"
        style={{
          filter: "blur(100px)",
        }}
      ></div>
      <section
        className="mx-auto items-center  lg:max-w-6xl select-none"
        id="four"
      >
        <div>
          <h3 className="text-5xl text-white text-left py-3 pt-32 font-bold font-poppins dark:text-darkText xl:text-7xl ">
            Let's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8] dark:bg-gradient-to-b ">
              Connect.
            </span>{" "}
          </h3>
          <p className="text-mb py-2 leading-8 text-left text-white dark:text-darkText">
            All of social links can be found here, get in touch!
          </p>
        </div>

        <div className="lg:flex md:flex md:flex-wrap lg:flex-nowrap items-center justify-center gap-10 ">
          <div className="text-left p-5 rounded-xl my-10 bg-[rgba(42,43,56,.5)] dark:bg-darkBg lg:w-1/3 md:w-2/5">
            <div className="flex flex-row items-center gap-2 ">
              <AiFillGithub className="text-white" size={40} />
              <h3 className="text-2xl font-bold  text-white">GitHub</h3>
            </div>

            <h3 className="text-md  pt-5 text-white">
              Want to see my project updates? Take a look at my GitHub
              profile
            </h3>

            <div className="flex gap-4 pt-5 ">
              <a
                href="https://github.com/adam-m01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub"
              >
                <button className=" w-20 flex border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] dark:bg-transparent dark:border-white text-white py-2 px-2 rounded-lg ">
                  <p className="text-white">Visit&nbsp;</p>
                  <RxOpenInNewWindow className="text-white " size={22} />
                </button>
              </a>
            </div>
          </div>

          <div className="text-left p-5 rounded-xl my-10 bg-[rgba(42,43,56,.5)] dark:bg-darkBg lg:w-1/3 md:w-2/5">
            <div className="flex flex-row items-center  gap-2 ">
              <AiFillLinkedin className="text-white " size={40} />
              <h3 className="text-2xl font-bold  text-white">LinkedIn</h3>
            </div>

            <h3 className="text-md  pt-5 text-white">
              Want to have a more formal approach? Let's connect on LinkedIn
            </h3>

            <div className="flex gap-4 pt-5 justify-left">
              <a
                href="https://www.linkedin.com/in/adammurray01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="items-center w-20 flex border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] dark:bg-transparent dark:border-white text-white py-2 px-2 rounded-lg">
                  <p className="text-white">Visit&nbsp;</p>
                  <RxOpenInNewWindow className="text-white " size={22} />
                </button>
              </a>
            </div>
          </div>

          <div className="text-left p-5 rounded-xl my-10 bg-[rgba(42,43,56,.5)] dark:bg-darkBg lg:w-1/3 md:w-2/5">
            <div className="flex flex-row items-center  gap-2 ">
              <IoMdMail className="text-white " size={40} />
              <h3 className="text-2xl font-bold  text-white">Mail</h3>
            </div>

            <h3 className="text-md  pt-5 text-white">
              Feel free to contact me with any inquiries to my email below
            </h3>

            <div className="flex gap-4 pt-5 justify-left" id="mail">
              <button className=" flex border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] dark:bg-transparent dark:border-white text-white py-2 px-2 rounded-lg cursor-default">
                <p className="text-white">contact@adamurray.com</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default Contact;
