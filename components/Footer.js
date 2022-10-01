import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src="/images/logo.svg" />
    </footer>
  );
};

export default Footer;
