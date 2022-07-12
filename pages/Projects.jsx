import { Navbar } from "../components/Navbar";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import data from "../scripts/projects-data.json";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = data.projects;
  console.log(projects);
  return (
    <>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main>
        <h1 className="section-title">Projects</h1>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, staggerChildren:.5}}
          variants={{
            hidden: {
              opacity: 0,
              x: -400,
            },
            visible: {
              opacity: 1,
              x: 0,
            }
          }}
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
        </motion.div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
