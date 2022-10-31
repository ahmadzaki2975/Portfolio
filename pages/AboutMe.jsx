import { Navbar } from "../components/Navbar";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { ExperienceItem } from "../components/Experience-item";

export default function AboutMe() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main>
        <h1 className="section-title">About Me</h1>
        <div className="about">
          <div className="about-image"></div>
          <div className="about-text">
            <h2>Ahmad Zaki Akmal</h2>
            <p>
              Undergraduate Information Engineering student in Gadjah Mada
              University. Currently learning front end web development, and
              planning to be a fullstack web developer.
            </p>
          </div>
        </div>
        <div className="icons">
          <h1>Tech Stack</h1>
          <div>
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <br />
            <i className="devicon-react-plain colored"></i>
            <i className="devicon-nextjs-plain"></i>
            <i className="devicon-tailwindcss-plain colored"></i>
          </div>
        </div>
        <div className="experience">
          <h1 className="">Experience</h1>
          <ExperienceItem
            title="Web Developer"
            company="FindIT! UGM"
            date="Oct 2022 - Present"
            description="Developing and maintaining FindIT! UGM website. FindIT! UGM is an event held by DTETI UGM about Information Technology."
          />
          <ExperienceItem
            title="Web Developer"
            company="Technocorner UGM"
            date="Oct 2022 - Present"
            description="Technocorner is an event held by DTETI UGM, similar to FindIT. However, Technocorner focuses more on general tech like electrical engineering."
          />
          <ExperienceItem
            title="Staff of IT Division"
            company="DTETI UGM Open House"
            date="Jul 2022 - Present"
            description="DTETI Open House is an event held to promote Department of Electrical Engineering and Information Technology to public."
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
