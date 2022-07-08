import Head from "next/head";
import Link from "next/link";
import { Hero } from "../components/Hero";
import { useEffect } from "react";
import { Links } from "../components/Links";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu } from "../components/Menu";

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
          <GiHamburgerMenu />
        </div>
        <Menu />
      </div>
      <Head>
        <title>Ahmad Zaki Akmal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <footer className="dark">
        <Links />
      </footer>
    </div>
  );
}
