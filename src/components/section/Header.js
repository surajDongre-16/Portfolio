import React from "react";
import HeaderButton from "../layouts/HeaderButton";
import { header } from "../../profile";
import Navbar from "../layouts/Navbar";

const Header = ({ setTheme, theme }) => {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      left: 0,
      behavior: "smooth",
    });
  };

  const toggleDarkMode = (e) => {
    document.documentElement.classList.toggle("dark-mode");
    document.getElementById("not-dark").classList.toggle("inverse-dark");
    document.getElementById("not-dark2").classList.toggle("inverse-dark");
    var x = document.getElementsByClassName("img-pro");
    for (let i = 0; i < x.length; i += 1) {
      x.item(i).classList.toggle("inverse-dark");
    }

    if (document.documentElement.classList.contains("dark-mode")) {
      localStorage.setItem("mode", "Dark");
      setTheme("Dark");
    } else {
      localStorage.setItem("mode", "Light");
      setTheme("Light");
    }
  };

  return (
    <div>
      <div className="Header">
        <h1>{`I'm ${header.name}`}</h1>
        <p className="line-1 anim-typewriter">A Full Stack Web Developer... </p>
        <label className="switch">
          <input
            id="mode-switch"
            onClick={(e) => toggleDarkMode(e)}
            type="checkbox"
          />
          <span className="slider round"></span>
        </label>
        <Navbar />
        <HeaderButton />
      </div>
      <img
        id="not-dark"
        onClick={scrollTo}
        alt="Contact Me"
        title="Contact Me"
        className="gtp"
        src="profile.png"
      ></img>
    </div>
  );
};

export default Header;
