import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({ image, heading, body }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <img src={image} className={styles.icon} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.bodyText}>{body}</p>
      </div>
    </div>
  );
};

export default Card;
