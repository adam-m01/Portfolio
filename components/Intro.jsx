import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Intro = () => {
  return (
    <FadeInWhenVisible>
      <section>
        <div className="relative lg:px-12 xl:px-16" id="one">
          {/* Background Circle */}
          <div
            className="absolute hidden overflow-hidden right-0 w-[30rem] h-[30rem] bg-gradient-to-r from-[#1CCDFF] to-[#b249f8] opacity-10 rounded-full blur-md lg:left-0 dark:bg-gradient-to-b lg:block"
            style={{ filter: "blur(100px)" }}
          ></div>

          {/* Content Container */}
          <div className="mx-auto mt-32 lg:max-w-6xl select-none">
            {/* Header Text */}
            <div>
              <h3 className="text-3xl text-white dark:text-darkText py-3 font-bold font-poppins lg:text-6xl md:text-5xl md:text-center lg:text-left">
                Let me <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8] dark:bg-gradient-to-b">
                  introduce
                </span>{" "}
                myself.
              </h3>
              <p className="text-sm lg:text-lg text-white dark:text-darkText md:text-center lg:text-left">
                Insight into my digital footstep
              </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-12 mx-auto lg:flex-row md:justify-center md:items-center">
              {/* Text Content */}
              <div className="text-white dark:text-darkText my-5 lg:max-w-2xl md:max-w-xl">
                {/* Journey Section */}
                <TextSection
                  title="My Journey"
                  content="I <span className='font-bold'>design</span>, <span className='font-bold'>develop</span> and <span className='font-bold'>deploy</span> digital experiences whilst embarking on a journey through <span className='font-bold'>cloud computing</span> and exploring the <span className='font-bold'>Dev-Ops Lifecycle</span>."
                />

                {/* Education Section */}
                <TextSection
                  title="Education"
                  content="Liverpool John Moores University<br /> &#8226; BSc (Hons) Computer Science"
                />

                {/* Certifications Section */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold py-2 pt-5 md:text-center lg:text-left">
                    Certifications
                  </h3>
                  <div className="flex flex-row gap-4 md:justify-center lg:justify-start">
                    {/* Certifications Links */}
                    <CertificationLink
                      url="https://www.credly.com/badges/25679de4-ffa0-4ce6-b8f0-49f8901775a6/public_url"
                      imgSrc="/aws-cert.webp"
                      altText="AWS Certification"
                    />
                    <CertificationLink
                      url="https://catalog-education.oracle.com/pls/certview/sharebadge?id=A9C86782007356FBDE637E218AEAC7C39C235335B19D809C2609291DE132CBDE"
                      imgSrc="/oracle-cert.webp"
                      altText="Oracle Certification"
                    />
                  </div>
                </div>
              </div>

              {/* Portrait Image */}
              <div className="rounded-xl w-full my-10 justify-center hidden lg:flex">
                <Image
                  src="/intro-portrait.webp"
                  alt="Main Portrait"
                  width={400}
                  height={400}
                  loading="eager"
                  className="h-auto max-w-sm mx-auto pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

// Text Section Component
const TextSection = ({ title, content }) => (
  <div>
    <h3 className="text-xl lg:text-2xl font-bold py-2 md:text-center lg:text-left">
      {title}
    </h3>
    <p
      className="text-md lg:text-lg md:text-base md:text-center lg:text-left"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

// Certification Link Component
const CertificationLink = ({ url, imgSrc, altText }) => (
  <Link href={url} target="_blank" rel="noopener noreferrer">
    <Image
      src={imgSrc}
      width={100}
      height={100}
      alt={altText}
      aria-label="View Certification"
      className="pointer-events-none"
    />
  </Link>
);

export default Intro;
