import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Footer = () => {
  return (
    <FadeInWhenVisible>
    <footer className="text-center bottom-0 left-0  text-white p-4">
      <span className="text-sm">
        © 2024 <a href="#home" className="hover:underline">Adam Murray</a>
      </span>
    </footer>
    </FadeInWhenVisible>
  );
};

export default Footer;
