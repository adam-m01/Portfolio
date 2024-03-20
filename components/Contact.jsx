import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { IoMdMail } from "react-icons/io";
import FadeInWhenVisible from "./FadeInWhenVisible";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contactInfo = [
  {
    name: "GitHub",
    description:
      "Want to see my project updates? Take a look at my GitHub profile",
    icon: AiFillGithub,
    link: "https://github.com/adam-m01",
    buttonText: "Visit",
  },
  {
    name: "LinkedIn",
    description: "Want a more formal approach? Let's connect on LinkedIn",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/adammurray01/",
    buttonText: "Visit",
  },
  {
    name: "Mail",
    description: "Feel free to contact me with any inquiries to my email below",
    icon: IoMdMail,
    link: "mailto:contact@adamurray.com",
    buttonText: "contact@adamurray.com",
    isMail: true,
  },
];

const Contact = () => {
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

const ContactBlock = ({ name, description, icon: Icon, link, buttonText, isMail }) => (
  <div className="flex flex-col justify-between p-5 rounded-xl bg-[rgba(42,43,56,.5)] dark:bg-darkBg lg:w-full md:w-[60%] mx-auto my-5 shadow-lg">
    <div>
      <div className="flex items-center gap-2">
        <Icon className="text-white" size={40} />
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>
      <p className="text-md pt-5 text-white">{description}</p>
    </div>
    <div className="flex gap-4 justify-start mt-4">
      {isMail ? (
        <button className="flex border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] dark:bg-transparent dark:border-white text-white py-2 justify-center px-2 rounded-lg cursor-default">
          <p className="text-white">{buttonText}</p>
        </button>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name}`} className="flex items-center border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] dark:bg-transparent dark:border-white text-white py-2 px-2 rounded-lg">
          <p className="text-white mr-1">{buttonText}</p>
          <RxOpenInNewWindow className="text-white" size={22} />
        </a>
      )}
    </div>
  </div>
);

  const ContactHeader = ({ Icon, name, description }) => (
    <div>
      <div className="flex items-center gap-2">
        <Icon className="text-white" size={40} />
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>
      <h3 className="text-md pt-5 text-white">{description}</h3>
    </div>
  );

  const ContactButton = ({ link, buttonText, isMail, name }) => (
    <div className="flex gap-4 justify-start mt-4">
      {isMail ? (
        <MailButton buttonText={buttonText} />
      ) : (
        <LinkButton link={link} buttonText={buttonText} name={name} />
      )}
    </div>
  );

  const MailButton = ({ buttonText }) => (
    <button className="flex border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] dark:bg-transparent dark:border-white text-white py-2 justify-center px-2 rounded-lg cursor-default">
      <p className="text-white">{buttonText}</p>
    </button>
  );

  const LinkButton = ({ link, buttonText, name }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name}`}
    >
      <button className="flex items-center border-[0.1rem] border-navGrey bg-[rgba(42,43,56,.5)] dark:bg-transparent dark:border-white text-white py-2 px-2 rounded-lg">
        <p className="text-white mr-1">{buttonText}</p>
        <RxOpenInNewWindow className="text-white" size={22} />
      </button>
    </a>
  );

  return (
    <FadeInWhenVisible>
      <section className="relative" id="four">
        <BackgroundCircle />
        <div className="mx-auto py-12 lg:max-w-6xl select-none">
          <Header />
          <div className="">
            {/* Slider for mobile views */}
            <div className="lg:hidden">
              <Slider {...settings}>
                {contactInfo.map((info, index) => (
                  <div key={index} className="px-2">
                    <ContactBlock {...info} />
                  </div>
                ))}
              </Slider>
              <div className="lg:hidden text-center text-white dark:text-black">
                Swipe for more →
              </div>
            </div>
            {/* Grid layout for desktop views */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
              {contactInfo.map((info, index) => (
                <ContactBlock key={index} {...info} />
              ))}
              {/* Indicator for swiping on mobile */}
            </div>
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

const Header = () => (
  <div>
    <h3 className="text-3xl text-white dark:text-black py-3 pt-32 font-bold font-poppins xl:text-6xl md:text-6xl md:text-center lg:text-left ">
      Let's{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1CCDFF] to-[#b249f8]">
        Connect.
      </span>
    </h3>
    <p className="text-sm lg:text-lg md:text-base text-white dark:text-black md:text-center lg:text-left">
      All social links can be found here
    </p>
  </div>
);

const ContactBlocks = () => (
  <div className="flex flex-wrap justify-between items-center mt-5 gap-4">
    {contactInfo.map((info, index) => (
      <ContactBlock key={index} {...info} />
    ))}
  </div>
);

export default Contact;
