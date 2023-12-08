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
import Link from "next/link";
import mainLogo from "../public/logo-sub.webp";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moonIconChanged, setMoonIconChanged] = useState(false);

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
            ? "h-[3.7rem] z-50  "
            : "backdrop-blur-extra h-[3.7rem] rounded-2xl dark:backdrop-blur-none"
        }`}
      >
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-[2rem]">
          <Link href="#home">
            <Image
              src={mainLogo}
              width={60}
              height={60}
              className="cursor-pointer"
              alt="logo"
            />
          </Link>

          <div className="hidden font-poppins lg:flex ">
            <ul className="hidden lg:flex md:flex lg:items-center lg:justify-center">
              <li className="ml-8">
                <Link href="#one">
                  <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                    About
                  </span>
                </Link>
              </li>
              <li className="ml-8">
                <Link href="#two">
                  <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                    Skills
                  </span>
                </Link>
              </li>
              <li className="ml-8">
                <Link href="#three">
                  <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                    Projects
                  </span>
                </Link>
              </li>
              <li className="ml-8">
                <Link href="#four">
                  <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                    Contact
                  </span>
                </Link>
              </li>
              <li className="ml-8">
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
              <Link href="#one">
                <span className="cursor-pointer text-white">About</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li onClick={() => setMenuOpen(false)} className="mb-7">
              <Link href="#two">
                <span className="cursor-pointer text-white">Skills</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li onClick={() => setMenuOpen(false)} className="mb-7">
              <Link href="#three">
                <span className="cursor-pointer text-white">Projects</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li onClick={() => setMenuOpen(false)} className="mb-7">
              <Link href="#four">
                <span className="cursor-pointer text-white">Contact</span>
              </Link>
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
          <a
            onClick={() => setMenuOpen(false)}
            href="#mail"
            aria-label="Visit Mail"
          >
            <IoMdMail size={30} className="cursor-pointer text-white " />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
