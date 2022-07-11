import Link from "next/link";
import { Hero } from "../components/Hero";
import { useEffect } from "react";
import { Links } from "../components/Links";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu } from "../components/Menu";
import { motion } from "framer-motion";

export default function Home() {
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

      <Hero />

      <footer className="dark">
      <motion.div initial="hidden" animate="visible" transition={{duration: 1, delay: 2}} variants={{
          hidden: {
            opacity: 0,
            x:-200
          },
          visible: {
            opacity: 1,
            x:0
          }
        }}>
          <Links />
        </motion.div>
      </footer>
    </div>
  );
}
