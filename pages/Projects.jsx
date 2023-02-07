import { Navbar } from "../components/Navbar";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import data from "../scripts/projects-data.json";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

export default function Projects() {
  const projects = data.projects;
  // console.log(projects);
  return (
    <>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main>
        <h1 className="section-title">Projects</h1>
        <p className="projects-text">
          Any personal or group projects that I contributed to is listed here.
        </p>
        <motion.div
          initial="hidden"
          animate="visible"
          className="projects-grid"
        >
          {projects.map((project) => {
            return (
              <ProjectCard
                key={nanoid()}
                title={project.title}
                desc={project.desc}
                src={project.src}
                link={project.link}
                repo={project.repo}
              />
            );
          })}
          <div className="placeholder-card">
            <FaTools style={{fontSize: "3rem"}} /> More Projects Coming Soon
          </div>
        </motion.div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
