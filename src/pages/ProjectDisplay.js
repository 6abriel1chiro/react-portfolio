import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GithubIcon from "../components/GithubIcon";

import "../styles/ProjectDisplay.css";
function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1> {project.name} </h1>
      <img src={project.image} alt="project screenshot" />
      <p>
        <b>Skills : </b>
        {project.skills}
      </p>

      <GithubIcon githubLink={project.githubLink} />
    </div>
  );
}

export default ProjectDisplay;
