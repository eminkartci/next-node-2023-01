import React from "react";
import Head from "next/head";

import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <Head>
        <title>A-pp</title>
        <meta
          name="description"
          content="AMEAN Danışmanlık örnek uygulama sitesi!"
        />
        <link rel="icon" href="/AMEAN Logo Golgeli.png" />
      </Head>
      <div className={styles.container}>Header ÖDEVİ</div>
    </div>
  );
}

export default Header;
