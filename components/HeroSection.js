import React from "react";
import styles from "../styles/HeroSection.module.css";
import PrimaryButton from "./PrimaryButton";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className="heading1">More than just shorter links</h1>
          <p className="bodyTextLg">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>

        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default HeroSection;
