import React from "react";
import styles from "../styles/PrimaryButton.module.css";

const PrimaryButton = ({ signUp, children }) => {
  return (
    <button
      className={`${styles.primaryButton} ${signUp ? styles.signUp : null}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
