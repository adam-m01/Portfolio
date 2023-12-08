import React from "react";

const Footer = () => {
  return (
    <footer className="text-center rounded-lg mx-auto items-center justify-center font-poppins lg:max-w-6xl select-none">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm mr-4 text-white sm:text-center dark:text-darkBg">
          © 2023{" "}
          <a href="#home" className="hover:underline">
            Adam Murray
          </a>
        </span>
        <ul className="flex flex-wrap text-center justify-center items-center mt-3 text-sm text-white dark:text-darkBg sm:mt-0">
          <li>
            <a href="#home" className="mr-4 cursor-pointer md:mr-6" aria-label="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#one" className="mr-4 cursor-pointer md:mr-6" aria-label="About">
              About
            </a>
          </li>
          <li>
            <a href="#two" className="mr-4 cursor-pointer md:mr-6" aria-label="Skills">
              Skills
            </a>
          </li>
          <li>
            <a href="#three" className="mr-4 cursor-pointer md:mr-6" aria-label="Projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#four" className="cursor-pointer" aria-label="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
