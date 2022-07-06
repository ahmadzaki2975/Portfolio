import Head from "next/head";
import Link from "next/link";
import { Hero } from "./components/Hero";
import { useEffect } from "react";
import { Links } from "./components/Links";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  // useEffect(() => {
  //   const logo = document.querySelector(".hero-image");
  //   const text = document.querySelector(".hero-text");

  //   setTimeout(() => {
  //     text.classList.remove("inactive");
  //   }, 3000);
  // }, []);

  return (
    <div>
      <div className="hero-menu">
        <div
          className="menu-btn"
          onClick={() => {
            const menu = document.querySelector(".menu");
            menu.classList.toggle("active");
          }}
        >
          <FaInstagram />
        </div>
        <div className="menu">
          <ul>
            <Link href="/AboutMe" passHref>
              <a>
                <li>About Me</li>
              </a>
            </Link>
            <Link href="/AboutMe" passHref>
              <a>
                <li>Projects</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
      <Head>
        <title>Ahmad Zaki Akmal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <footer>
        <Links />
        <p>&copy; Ahmad Zaki 2022</p>
      </footer>
    </div>
  );
}
