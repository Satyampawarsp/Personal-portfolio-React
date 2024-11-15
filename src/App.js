import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./pages/homepage/HomePage";
import Project from "./components/project/Project";
import About from "./components/about/About";
import Skill from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={} /> */}
          <Route path="/" element={<HomePage/>} />
          <Route path="about" element={<About/>} />
          <Route path="projects" element={<Project/>} />
          <Route path="skills" element={<Skill/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
