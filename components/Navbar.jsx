import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moonIconChanged, setMoonIconChanged] = useState(true);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMoonIconClick = () => {
    setMoonIconChanged(!moonIconChanged);
    toggleDarkMode(!darkMode);
  };

  return (
    <nav
      className={`fixed z-50 m-9 w-[75%] mx-auto max-w-sm border-[0.1rem] border-navGrey dark:border-darkBorder inset-x-0 select-none lg:mx-auto lg:max-w-full md:mx-auto md:max-w-full ${
        menuOpen
          ? "rounded-2xl border-navGrey border-transparent dark:border-transparent"
          : "rounded-2xl bg-[rgba(42,43,56,.5)] dark:bg-navBlue"
      }`}
    >
      <div
        className={`relative ${
          menuOpen
            ? "h-[3.7rem] z-50"
            : "backdrop-blur-extra h-[3.7rem] rounded-2xl dark:backdrop-blur-none "
        }`}
      >
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-[2rem]">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <Image
              src="/logo-sub.webp"
              width={60}
              height={60}
              className="cursor-pointer"
              alt="logo"
            />
          </ScrollLink>

          <div className="hidden font-poppins lg:flex text-white">
            <ul className="hidden lg:flex md:flex lg:items-center lg:justify-center ">
              <li className="ml-8 cursor-pointer ">
                <ScrollLink
                  to="one"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                    About
                  </span>
                </ScrollLink>
              </li>
              <li className="ml-8 cursor-pointer">
                <ScrollLink
                  to="two"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                    Skills
                  </span>
                </ScrollLink>
              </li>
              <li className="ml-8 cursor-pointer">
                <ScrollLink
                  to="three"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                    Projects
                  </span>
                </ScrollLink>
              </li>
              <li className="ml-8 cursor-pointer">
                <ScrollLink
                  to="four"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                    Contact
                  </span>
                </ScrollLink>
              </li>
              <li className="ml-8 cursor-pointer">
                <span
                  className="cursor-pointer"
                  onClick={
                    moonIconChanged ? handleMoonIconClick : handleMoonIconClick
                  }
                >
                  {moonIconChanged ? (
                    <HiSun className="text-white" size={25} />
                  ) : (
                    <HiMoon className="text-white" size={25} />
                  )}
                </span>
              </li>
            </ul>
          </div>

          <div className="flex gap-6 cursor-pointer lg:hidden">
            {moonIconChanged ? (
              <HiSun
                className="text-white"
                size={25}
                onClick={handleMoonIconClick}
              />
            ) : (
              <HiMoon
                className="text-white"
                size={25}
                onClick={handleMoonIconClick}
              />
            )}

            <div onClick={handleNav} className="cursor-pointer">
              {menuOpen ? (
                <AiOutlineClose className="text-white" size={25} />
              ) : (
                <AiOutlineMenu className="text-white" size={25} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed top-0 pt-16 w-[75%] m-9 mx-auto max-w-sm  bg-[rgba(42,43,56,.5)] dark:bg-darkBg border-[0.1rem]  border-navGrey dark:border-darkBorder p-10 backdrop-blur-extra rounded-2xl z-40  lg:min-w-[75%] md:min-w-[75%]"
            : "fixed left-[-110%] w-screen p-10 bg-nav dark:bg-navBlue "
        }
      >
        <div className="flex w-full items-center">
          <div onClick={handleNav} className="cursor-pointer"></div>
        </div>
        <div className="flex-col py-4 text-center">
          <ul>
            <li onClick={() => setMenuOpen(false)} className="mb-7">
              <ScrollLink
                to="one"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={() => setMenuOpen(false)}
              >
                <span className="cursor-pointer text-white">About</span>
              </ScrollLink>
            </li>
          </ul>
          <ul>
            <li onClick={() => setMenuOpen(false)} className="mb-7">
              <ScrollLink
                to="two"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={() => setMenuOpen(false)}
              >
                <span className="cursor-pointer text-white">Skills</span>
              </ScrollLink>
            </li>
          </ul>
          <ul>
            <li onClick={() => setMenuOpen(false)} className="mb-7">
              <ScrollLink
                to="three"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={() => setMenuOpen(false)}
              >
                <span className="cursor-pointer text-white">Projects</span>
              </ScrollLink>
            </li>
          </ul>
          <ul>
            <li onClick={() => setMenuOpen(false)} className="mb-7">
              <ScrollLink
                to="four"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={() => setMenuOpen(false)}
              >
                <span className="cursor-pointer text-white">Contact</span>
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-row justify-around  items-center">
          <a
            onClick={() => setMenuOpen(false)}
            href="https://www.linkedin.com/in/adammurray01/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn"
          >
            <AiFillLinkedin size={30} className="cursor-pointer text-white" />
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="https://github.com/adam-m01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub"
          >
            <AiFillGithub size={30} className="cursor-pointer text-white " />
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
