import { Navbar } from "../components/Navbar";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { ExperienceItem } from "../components/ExperienceItem";

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
              University. I have great interest in software development, especially
              web development.
            </p>
          </div>
        </div>
        <div className="icons">
          <h1>Tech Stack</h1>
          <div className="icons-grid">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-react-plain colored"></i>
            <i className="devicon-nextjs-plain"></i>
            <i className="devicon-tailwindcss-plain colored"></i>
            <i className="devicon-express-original original"></i>
            <i className="devicon-firebase-plain colored"></i>
            <i className="devicon-mongodb-plain colored"></i>
          </div>
        </div>
        <div className="experience">
          <h1 className="">Experience</h1>
          <ExperienceItem
            title="Web Developer"
            company="FindIT! UGM"
            date="Oct 2022 - Present"
            description="I lead the front end team work on the main website of FindIT! UGM 2023."
          />
          <ExperienceItem
            title="Web Developer"
            company="Technocorner UGM"
            date="Oct 2022 - Present"
            description="I worked both on the front end and back end of Technocorner UGM website, but mostly on the front end side."
          />
          <ExperienceItem
            title="IT Division Staff"
            company="DTETI UGM Open House"
            date="Jul 2022 - Nov 2022"
            description="DTETI Open House is an event held to promote Department of Electrical Engineering and Information Technology to public. I help the IT Division to maintain the website and stream the event."
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
