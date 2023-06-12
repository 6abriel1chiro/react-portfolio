import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function GithubIcon(props) {
  return (
    <Link to={props.githubLink} target="_blank">
      <GitHubIcon />
    </Link>
  );
}

export default GithubIcon;
