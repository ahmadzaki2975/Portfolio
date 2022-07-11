import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import {ProjectCard} from "../components/ProjectCard"
import data from "../scripts/projects-data.json"
import { nanoid } from "nanoid";

export default function Projects() {
  const projects = data.projects;
  console.log(projects)
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
              key={nanoid()}
              title={project.title}
              desc={project.desc}
              src={project.src}

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
