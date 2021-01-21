import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Button } from "@micromed/herz-ui/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo Herz app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://herz-ui.micromed.io/">Herz UI!</a>
        </h1>

        <p className={styles.description}>
          Get started by <Button>Clicking me !</Button>
        </p>
      </main>
    </div>
  );
}
