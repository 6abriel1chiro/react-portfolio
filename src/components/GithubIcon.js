import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function GithubIcon(props) {
  return (
    <Link to={props.githubLink}>
      <GitHubIcon />
    </Link>
  );
}

export default GithubIcon;
