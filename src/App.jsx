import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Research />
        <Contact />
        <Footer />

      </div>
    </>
  );
}

export default App;