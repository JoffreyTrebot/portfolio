import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joffrey Trébot - Développeur Front-End Freelance</title>
        <meta name="description" content="J'aide les entreprises à atteindre leurs objectifs en concevant et en créant des produits numériques centrés sur l'utilisateur et son expérience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold">Joffrey Trébot</h1>
      </main>
    </div>
  );
}
