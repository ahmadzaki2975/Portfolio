import Head from "next/head";
import Image from "next/image";
import { Hero } from "./components/Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const logo = document.querySelector(".hero-image");
    const text = document.querySelector(".hero-text");

    setTimeout(() => {
      text.classList.remove("inactive");
    }, 3000);
  }, []);

  return (
    <div>
      <Head>
        <title>Ahmad Zaki Akmal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>

      <Hero />

      <footer></footer>
    </div>
  );
}
