import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <h1>Experience</h1>

                <Experience />
                <h1>Projects</h1>

                <Projects />
              </>
            }
          />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="project/:id" element={<ProjectDisplay />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}
export default App;
