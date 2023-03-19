import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "./GithubIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to={"https://www.instagram.com/6abriel1chiro/"}>
          <InstagramIcon />
        </Link>

        <Link to={"https://twitter.com/6abriel1chiro"}>
          <TwitterIcon />
        </Link>
        <GithubIcon githubLink="https://github.com/6abriel1chiro" />
        <Link to={"https://www.linkedin.com/in/gabriel-balderrama-9524001b5/"}>
          <LinkedInIcon />
        </Link>
      </div>
      <p>&copy; 2023 gabriel ichiro</p>
    </div>
  );
}

export default Footer;
