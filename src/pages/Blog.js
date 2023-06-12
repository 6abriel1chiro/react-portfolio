import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GithubIcon from "../components/GithubIcon";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        <li>
          <Link to="/blog/post1">Blog Post 1</Link>
        </li>
        <li>
          <Link to="/blog/post2">Blog Post 2</Link>
        </li>
        <li>
          <Link to="/blog/post3">Blog Post 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Blog;
