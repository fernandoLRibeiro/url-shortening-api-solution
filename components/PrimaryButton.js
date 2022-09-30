import React from "react";
import styles from "../styles/PrimaryButton.module.css";

const PrimaryButton = ({
  signUp,
  type,
  form,
  children,
  link,
  copied,
  action,
}) => {
  return (
    <button
      className={`${styles.primaryButton} ${signUp ? styles.signUp : null} ${
        form ? styles.form : null
      } ${link ? styles.link : null} ${copied ? styles.copied : null}`}
      type={type ? type : "button"}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
