import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import {ProjectCard} from "../components/ProjectCard"

export default function Projects() {
  return (
    <>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main>
        <h1 className="section-title">Projects</h1>
        <div className="projects-grid">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
