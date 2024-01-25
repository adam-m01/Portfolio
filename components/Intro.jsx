import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Intro = () => {
  return (
    <FadeInWhenVisible>
      <section>
        <div
          className="absolute hidden overflow-hidden right-0 w-[30rem] h-[30rem] bg-gradient-to-r from-[#1CCDFF] to-[#b249f8] opacity-10 rounded-full blur-md lg:left-0 dark:bg-gradient-to-b lg:block"
          style={{
            filter: "blur(100px)",
          }}
        ></div>

        <div
          className="mx-auto items-center mt-32 lg:max-w-6xl select-none "
          id="one"
        >
          <div>
            <h3 className="text-3xl text-white dark:text-darkText text-left py-3 font-bold font-poppins xl:text-6xl ">
              Let me <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8] dark:bg-gradient-to-b ">
                introduce
              </span>{" "}
              myself.
            </h3>
            <p className="text-lg text-white dark:text-darkText">
              Insight into my digital footstep!
            </p>
          </div>

          <div className="py-5 mx-auto gap-12  lg:flex">
            <div className="text-left my-5 lg:text-left  lg:max-w-2xl ">
              <h3 className="text-2xl font-bold py-2 text-white dark:text-darkText">
                My Journey
              </h3>

              <p className="text-white dark:text-darkText text-lg">
                I <span className="font-bold">design</span>,{" "}
                <span className="font-bold">develop</span> and
                <span className="font-bold"> deploy</span> digital experiences
                whilst embarking on a journey through
                <span className="font-bold"> cloud computing </span> and
                exploring the{" "}
                <span className="font-bold">Dev-Ops Lifecycle</span>.<br />
              </p>

              <h3 className="text-2xl font-bold py-2 pt-5 text-white dark:text-darkText ">
                Education
              </h3>

              <p className="text-white dark:text-darkText text-lg">
                Liverpool John Moores University
                <br /> &#8226; BSc (Hons) Computer Science
              </p>
              <h3 className="text-2xl font-bold py-2 pt-5 text-white dark:text-darkText ">
                Certifications
              </h3>

              <div className="flex flex-row gap-4">
                <Link
                  href="https://www.credly.com/badges/25679de4-ffa0-4ce6-b8f0-49f8901775a6/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block" }}
                >
                  <Image
                    src="/aws-cert.webp"
                    width={120}
                    height={120}
                    alt="oraclecert"
                    aria-label="View Certification"
                    style={{ maxWidth: "100%" }}
                  />
                </Link>
                <Link
                  href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=A9C86782007356FBDE637E218AEAC7C39C235335B19D809C2609291DE132CBDE"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block" }}
                >
                  <Image
                    src="/oracle-cert.webp"
                    width={120}
                    height={120}
                    alt="oraclecert"
                    aria-label="View Certification"
                    style={{ maxWidth: "100%" }}
                  />
                </Link>
              </div>
            </div>
            <div className=" text-center rounded-xl w-full my-10 dark:bg-darkBg justify-center hidden lg:flex">
              <img
                src="/intro-portrait.webp"
                alt="Main Portrait"
                loading="eager"
                width="80%"
              />
            </div>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default Intro;
