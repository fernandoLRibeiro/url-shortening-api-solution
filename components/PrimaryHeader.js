import React, { useEffect, useState } from "react";
import styles from "../styles/PrimaryHeader.module.css";
import MobileNavButton from "./MobileNavButton";
import PrimaryButton from "./PrimaryButton";

const PrimaryHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <header className={styles.primaryHeader}>
      <img src="/images/logo.svg" alt="Logo" />
      <nav
        className={`${styles.headerNavigation} ${isOpen ? styles.open : null}`}
      >
        <ul className={styles.navLinksContainer}>
          <li className={styles.navLinkContainer}>
            <a href="#" className={styles.navLink}>
              Features
            </a>
          </li>
          <li className={styles.navLinkContainer}>
            <a href="#" className={styles.navLink}>
              Pricing
            </a>
          </li>
          <li className={styles.navLinkContainer}>
            <a href="#" className={styles.navLink}>
              Resources
            </a>
          </li>
        </ul>

        <div className={styles.navButtonsContainer}>
          <button className={styles.loginButton}>
            <p className={styles.navLink}>Login</p>
          </button>
          <PrimaryButton signUp={true}>Sign Up</PrimaryButton>
        </div>
      </nav>
      <MobileNavButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
    </header>
  );
};

export default PrimaryHeader;
