import React from "react";
import styles from "../styles/PrimaryButton.module.css";

const PrimaryButton = ({ signUp, type, form, children }) => {
  return (
    <button
      className={`${styles.primaryButton} ${signUp ? styles.signUp : null} ${
        form ? styles.form : null
      }`}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
