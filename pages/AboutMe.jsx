import { Navbar } from "../components/Navbar";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";

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
          <i className="devicon-html5-plain colored"></i>
          <i className="devicon-css3-plain colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <br />
          <i className="devicon-react-plain colored"></i>
          <i className="devicon-nextjs-plain"></i>
          <i className="devicon-bootstrap-plain colored"></i>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
