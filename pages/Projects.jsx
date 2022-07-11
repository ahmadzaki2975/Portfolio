import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import {ProjectCard} from "../components/ProjectCard"
import * as data from "../scripts/projects-data.json"

export default function Projects() {
  const projects = data.projects;
  return (
    <>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main>
        <h1 className="section-title">Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => {
            return (
            <ProjectCard 
              title={project.title}
              desc={project.desc}
            />)
          })}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
