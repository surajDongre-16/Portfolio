import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [trig,setTrig]=useState(false)
  const homeScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const aboutScroll = () => {
    window.scrollTo({
      top: 950,
      left: 0,
      behavior: "smooth",
    });
  };
  const projectScroll = () => {
    window.scrollTo({
      top: 2000,
      left: 0,
      behavior: "smooth",
    });
  };
  const contactScroll = () => {
    window.scrollTo({
      top: 100000,
      left: 0,
      behavior: "smooth",
    });
  };
  const openHam = () => {
    setTrig(!trig)
    console.log(trig);
  };
  const closeHam=()=>{
    setTrig(!trig)
  }

  const homeScrollMob = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const aboutScrollMob = () => {
    window.scrollTo({
      top: 530,
      left: 0,
      behavior: "smooth",
    });
    setTrig(false)
  };
  const projectScrollMob = () => {
    window.scrollTo({
      top: 1700,
      left: 0,
      behavior: "smooth",
    });
    setTrig(false);
  };
  const contactScrollMob = () => {
    window.scrollTo({
      top: 3600,
      left: 0,
      behavior: "smooth",
    });
     setTrig(false);
  };

  return (
    <div className="navbar">
      <h6 onClick={homeScroll}>Home</h6>
      <h6 onClick={aboutScroll}>About</h6>
      <h6 onClick={projectScroll}>Projects</h6>
      <h6 onClick={contactScroll}>Contact</h6>

      {trig ? (
        <>
          <div className="close-menu" onClick={closeHam} >
            <AiFillCloseCircle />
          </div>
          <div className="ham-menu">
            <h6 onClick={homeScrollMob}>Home</h6>
            <h6 onClick={aboutScrollMob}>About</h6>
            <h6 onClick={projectScrollMob}>Projects</h6>
            <h6 onClick={contactScrollMob}>Contact</h6>
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
