import Head from "next/head";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Intro from "../../components/Intro";
import Stack from "../../components/Stack";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

console.log(
  "%c Thanks for checking out my site! 🚀 ",
  "background: #3498db; color: #ffffff; padding: 5px; border-radius: 3px;"
);

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Adam Murray 🚀</title>
          <meta
            name="description"
            content="My personal portfolio website, a place to showcase my projects and digital journey"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <main
          className={`flex flex-col bg-deepBlue pt-40 px-4 md:px-8 lg:px-20 dark:bg-white font-poppins `}
          id="home"
        >
          <Main />
          <Intro />
          <Stack />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
