import React, { useState } from "react";
import styles from "../styles/LinkItem.module.css";
import PrimaryButton from "./PrimaryButton";

const LinkItem = ({ linkObj }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(linkObj.shortLink);
    setIsCopied(true);
  };

  return (
    <div className={styles.linkItem}>
      <p className={styles.link}>{linkObj.originalLink}</p>
      <div className={styles.lastHalf}>
        <p className={`${styles.link} ${styles.shortLink}`}>
          {linkObj.shortLink}
        </p>
        <PrimaryButton link copied={isCopied} action={handleCopy}>
          {isCopied ? "Copied!" : "Copy"}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default LinkItem;
