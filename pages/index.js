import Head from "next/head";
import Image from "next/image";
import PrimaryHeader from "../components/PrimaryHeader";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>URL Shortening API</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <PrimaryHeader />
    </div>
  );
}
