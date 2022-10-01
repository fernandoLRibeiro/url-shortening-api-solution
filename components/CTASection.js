import React from "react";
import PrimaryButton from "./PrimaryButton";
import styles from "../styles/CTASection.module.css";

const CTASection = () => {
  return (
    <section className={styles.CTA}>
      <h2 className={styles.heading}>Boost your links today</h2>
      <PrimaryButton>Get Started</PrimaryButton>
    </section>
  );
};

export default CTASection;
