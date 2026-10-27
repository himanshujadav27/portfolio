import React from "react";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <>
    <div className="project-card">

      <h3>{props.Heading}</h3>

      <img src={props.Image} alt="/" />

      <p>
        {props.Desc}
      </p>

      <p className="tech-stack">{props.Tech}</p>

      <div className="project-links">
        <a
          href={`https://github.com/himanshujadav27/${props.GitName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button">Github ➡️</button>
        </a>

        <a
          href={`https://himanshujadav27.github.io/${props.DemoName}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button">Live Demo ➡️</button>
        </a>
      </div>
    </div>
    </>
  );
}
