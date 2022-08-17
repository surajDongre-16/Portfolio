import React from "react";
import { social } from "../../profile";

const HeaderButton = () => {
  return (
    <>
      <div className="mx-auto head-contact">
        <a
          title="Download Resume"
          href={social.resume}
          rel="noreferrer"
          target="_blank"
          download
        >
          <button className="see">
            Resume<i className="fas fa-eye"></i>
          </button>
        </a>
        {social.linkedin && (
          <a
            title="Visit Linkedin profile"
            rel="noopener noreferrer"
            target="_blank"
            href={social.linkedin}
          >
            <button className="see seelink1">
              <i className="fab fa-linkedin"></i>
            </button>
          </a>
        )}
        {social.github && (
          <a
            title="Visit Github profile"
            rel="noopener noreferrer"
            target="_blank"
            href={social.github}
          >
            <button className="see seelink2">
              <i className="fab fa-github"></i>
            </button>
          </a>
        )}
      </div>
    </>
  );
};

export default HeaderButton;
