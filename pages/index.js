/** @jsxImportSource theme-ui */
import Head from "next/head";
import Image from "next/image";
import LandingHero from "../components/Landing/LandingHero";
import styles from "./ladingpage.module.css";
import { jsx } from "theme-ui";
import Main from "../components/MainPage";
export default function Home() {
  return (
    <>
      <Head>
        <title>Dewitt Chavez Portfolio</title>
        <meta name="description" content="Dewitt Chavez Portfolio's" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/faviconapple.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon16x16.png"
        />
      </Head>
      <Main />
    </>
  );
}
