import Head from "next/head";
import "../styles/globals.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import { motion } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ahmad Zaki Akmal</title>
        <link rel="icon" href="/Z-Logo-2-min.svg"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
