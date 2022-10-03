import React from "react";
import styles from "../styles/MobileNavButton.module.css";

const MobileNavButton = ({ onClick }) => {
  return (
    <button className={styles.mobileNavButton} onClick={onClick}>
      <div />
      <div />
      <div />
    </button>
  );
};

export default MobileNavButton;
