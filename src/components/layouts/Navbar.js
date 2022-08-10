import React from "react"

const Navbar=()=>{
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
    return (
      <div className="navbar">
        <h6 onClick={homeScroll}>Home</h6>
        <h6 onClick={aboutScroll}>About</h6>
        <h6 onClick={projectScroll}>Projects</h6>
        <h6 onClick={contactScroll}>Contact</h6>
      </div>
    );
}


export default Navbar