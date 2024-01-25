import Head from "next/head";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Intro from "../../components/Intro";
import Stack from "../../components/Stack";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import LoadingScreen from "../../components/LoadingScreen";

console.log(
  "%c Thanks for checking out my site! 🚀 ",
  "background: #3498db; color: #ffffff; padding: 5px; border-radius: 3px;"
);

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

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
          className={`bg-deepBlue px-6 dark:bg-white font-poppins`}
          id="home"
        >
          <LoadingScreen />
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
