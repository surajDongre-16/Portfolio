import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [trig, setTrig] = useState(false);

  const openHam = () => {
    setTrig(!trig);
  };
  const closeHam = () => {
    setTrig(!trig);
  };

  const homeScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setTrig(false);
  };
  const aboutScroll = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setTrig(false);
  };
  const projectScroll = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setTrig(false);
  };
  const contactScroll = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setTrig(false);
  };

  return (
    <div className="navbar">
      <h6 onClick={() => homeScroll()}>Home</h6>
      <h6 onClick={() => aboutScroll("#about")}>About</h6>
      <h6 onClick={() => projectScroll("#Projects")}>Projects</h6>
      <h6 onClick={() => contactScroll("#contact")}>Contact</h6>

      {trig ? (
        <>
          <div className="close-menu" onClick={closeHam}>
            <AiFillCloseCircle />
          </div>
          <div className="ham-menu">
            <h6 onClick={() => homeScroll()}>Home</h6>
            <h6 onClick={() => aboutScroll("#about")}>About</h6>
            <h6 onClick={() => projectScroll("#Projects")}>Projects</h6>
            <h6 onClick={() => contactScroll("#contact")}>Contact</h6>
          </div>
        </>
      ) : (
        <div className="hamburger" onClick={openHam}>
          <FiMenu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
