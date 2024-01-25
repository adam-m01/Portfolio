import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { IoMdMail } from "react-icons/io";
import FadeInWhenVisible from "./FadeInWhenVisible";

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

const ContactBlock = ({
  name,
  description,
  icon: Icon,
  link,
  buttonText,
  isMail,
}) => (
  <div className="flex flex-col justify-between p-5 rounded-xl bg-[rgba(42,43,56,.5)] dark:bg-darkBg h-auto w-full md:w-1/2 lg:w-1/3 xl:max-w-xs my-2">
    <ContactHeader Icon={Icon} name={name} description={description} />
    <ContactButton
      link={link}
      buttonText={buttonText}
      isMail={isMail}
      name={name}
    />
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

const Contact = () => {
  return (
    <FadeInWhenVisible>
      <section>
        <div className="relative" id="four">
          <BackgroundCircle />
          <ContactContent />
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

const ContactContent = () => (
  <div className="mx-auto items-center max-w-6xl select-none px-4">
    <Header />
    <ContactBlocks />
  </div>
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
  <div className="flex flex-wrap justify-around items-center mt-5 gap-4">
    {contactInfo.map((info, index) => (
      <ContactBlock key={index} {...info} />
    ))}
  </div>
);

export default Contact;
