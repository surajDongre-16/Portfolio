import React, { useEffect, useState } from "react";
import ParticlesBackground from "./components/layouts/ParticlesBackground";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";

function App() {
  const [theme,setTheme]=useState("Light")
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);
 
  return (
    <div className="App">
      <Header setTheme={setTheme} />
      <ParticlesBackground />
      <About theme={theme} />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
