import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

const Skills = () => {
  return (
    <div
      data-aos="fade-up"
      className="skill__square col-3 col-sm-2 my-3 mx-auto mere-skills"
    >
      <div>
        <AiFillHtml5 size={50} />
        <h6 className="mt-2">HTML5</h6>
      </div>
      <div>
        <FaCss3 size={50} />
        <h6 className="mt-2">CSS3</h6>
      </div>
      <div>
        <SiJavascript size={50} />
        <h6 className="mt-2">JAVASCRIPT</h6>
      </div>
      <div>
        <FaReact size={50} />
        <h6 className="mt-2">REACT</h6>
      </div>
      <div>
        <SiRedux size={50} />
        <h6 className="mt-2">REDUX</h6>
      </div>
      <div>
        <SiChakraui size={50} />
        <h6 className="mt-2">CHAKRA UI</h6>
      </div>
      <div>
        <SiMaterialui size={50} />
        <h6 className="mt-2">MATERIAL UI</h6>
      </div>
      <div>
        <FaBootstrap size={50} />
        <h6 className="mt-2">BOOTSTRAP</h6>
      </div>
      <div>
        <FaNode size={50} />
        <h6 className="mt-2">NODE JS</h6>
      </div>
      <div>
        <SiExpress size={50} />
        <h6 className="mt-2">EXPRESS</h6>
      </div>
      <div>
        <SiMongodb size={50} />
        <h6 className="mt-2">MONGODB</h6>
      </div>
      <div>
        <SiTypescript size={50} />
        <h6 className="mt-2">TYPESCRIPT</h6>
      </div>
      <div>
        <SiNpm size={50} />
        <h6 className="mt-2">NPM</h6>
      </div>
      <div>
        <SiGithub size={50} />
        <h6 className="mt-2">GITHUB</h6>
      </div>
      <div>
        <SiNetlify size={50} />
        <h6 className="mt-2">NETLIFY</h6>
      </div>
      <div>
        <SiHeroku size={50} />
        <h6 className="mt-2">HEROKU</h6>
      </div>
    </div>
  );
};

export default Skills;
