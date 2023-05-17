import React from "react";
import GitHubCalendar from "react-github-calendar";
import Project from "../layouts/Project";
import { gitStats, projects, section3Title } from "../../profile";

const Works = () => {
  return (
    <>
      <div data-aos="zoom-in-up" data-aos-once="true" className="third">
        <>
          <div className="pp-head-line mx-auto text-center">
            <h1 id="Projects" className="red-line pp-head">
              {section3Title}
            </h1>
          </div>
        </>
        <div className="row">
          {projects &&
            projects.map((x) => (
              <Project
                key={x.id}
                id={x.id}
                url={x.url}
                name={x.name}
                skills={x.skills}
                description={x.description}
                live={x.live}
              />
            ))}
        </div>
        <div style={{ marginTop: "5%" }}>
          <h2>Github Stats</h2>
          <GitHubCalendar username="surajDongre-16" />
          <div className="stats">
            <img src={gitStats} alt="github_stats" />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=surajDongre-16"
              alt="surajDongre-16"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
