import React from "react";
import Image from "next/image";
import oracleLogo from "../public/oracle-cert.webp";
import Link from "next/link";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Intro = () => {
  return (
    <FadeInWhenVisible>
      <div
        className="absolute hidden overflow-hidden right-0 w-[30rem] h-[30rem] bg-gradient-to-r from-[#1CCDFF] to-[#b249f8] opacity-10 rounded-full blur-md lg:left-0 dark:bg-gradient-to-b lg:block"
        style={{
          filter: "blur(100px)",
        }}
      ></div>

      <section className="mx-auto items-center pt-32 lg:max-w-6xl select-none" id="one">
        <div>
          <h3 className="text-5xl text-white dark:text-darkText text-left py-3 font-bold font-poppins xl:text-7xl">
            Let me <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8] dark:bg-gradient-to-b ">
              introduce
            </span>{" "}
            myself.
          </h3>
          <p className="py-2 text-white dark:text-darkText">
            Insight into my digital footstep!
          </p>
        </div>

        <div className="  my-5 mx-auto gap-10 max-w-6xl lg:flex ">
          <div className="text-left my-5 lg:text-left  lg:max-w-2xl ">
            <h3 className="text-2xl font-bold py-2 pt-5 text-white dark:text-darkText">
              My Journey
            </h3>

            <p className="text-white dark:text-darkText text-lg py-2">
              I <span className="font-bold">design</span>,{" "}
              <span className="font-bold">develop</span> and
              <span className="font-bold"> deploy</span> digital experiences
              whilst embarking on a journey through
              <span className="font-bold"> cloud computing </span> and exploring
              the <span className="font-bold">Dev-Ops Lifecycle</span>.<br />
            </p>

            <h3 className="text-2xl font-bold py-2 pt-5 text-white dark:text-darkText ">
              Education
            </h3>

            <p className="text-white dark:text-darkText text-lg ">
              Liverpool John Moores University
              <br /> &#8226; BSc (Hons) Computer Science
            </p>

            {/* 
                <h3 className="text-lg font-bold py-2 text-white-800  ">
                BSc (Hons) Computer Science <br />
                Liverpool John Moores University
                </h3> */}

            {/* <h4 className="py-4 text-white-800">Tools I use</h4>
                <p className="text-white py-1">PS</p>
                <p className="text-white py-1">Test</p>
                <p className="text-white py-1">Test</p> */}
          </div>

          <div className="text-center my-5 items-center">
            <h3 className="text-2xl font-bold py-2 pt-5 text-white dark:text-darkText ">
              Certifications
            </h3>

            <Link
              href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=A9C86782007356FBDE637E218AEAC7C39C235335B19D809C2609291DE132CBDE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={oracleLogo}
                width={400}
                height={400}
                className="mx-auto"
                alt="oraclecert"
                aria-label="View Certification"
              />
            </Link>
            {/* <h3 className="text-lg font-medium pt-8 pb-2 text-white">
                  Text
                </h3>
                <p className="text-white-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do.
                </p> */}
            {/* 
                <h4 className="py-4 text-white-800">Tools I use</h4>
                <p className="text-white py-1">PS</p>
                <p className="text-white py-1">Test</p>
                <p className="text-white py-1">Test</p> */}
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default Intro;
