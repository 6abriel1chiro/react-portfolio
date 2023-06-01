import React from "react";
import { Link } from "react-router-dom";

//import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "../components/GithubIcon";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Gabriel Balderrama</h2>
        <div className="prompt">
          <p>software engineer</p>

          <Link
            to={"https://www.linkedin.com/in/gabriel-balderrama-9524001b5/"}
          >
            <LinkedInIcon />
          </Link>

          <GithubIcon githubLink="https://github.com/6abriel1chiro" />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML,CSS, Angular</span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span>Flask,NodeJS, MYSQL, MongoDB, NestJS,NextJS, .NET</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Python, Javascript, C# , C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
