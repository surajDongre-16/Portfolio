import React from "react";

const Project = ({ id, name, url, skills, description, live }) => {
  return (
    <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
      <div className=" col-12 col-lg-4">
        <div className="image-project">
          <div className={`img-pro ${id}`}></div>
        </div>
        <a
          title={url}
          className="project-name"
          rel="noopener noreferrer"
          target="_blank"
          href={url}
        >
          <h2>{name}</h2>
        </a>
        {skills && <h3>{skills.map((skill) => skill)}</h3>}
      </div>
      <div className="project-descrip">
        <p>{description}</p>
        <div className="project-btn">
          <button>
            <a href={url} target="/">
              Code Base
            </a>
          </button>
          <button>
            <a href={live} target="/">
              Live Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
