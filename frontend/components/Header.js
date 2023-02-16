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
      <div className={styles.container}>
        <div className={styles.logoContainer}>A=pp</div>

        <div className={styles.navlinksContainer}>
          <div className={styles.navLinks}>
            <div className={styles.link}> Link 1</div>
            <div className={styles.link}> Link 2</div>
            <div className={styles.link}> Link 3</div>
            <div className={styles.link}> Link 4</div>
            <div className={styles.link}> Link 5</div>
          </div>

          <div className={styles.profileContainer}>
            <img
              src="/profileimage.webp"
              alt="Profil resmi"
              className={styles.profileImg}
            />
            <p> İsim Soyisim</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
