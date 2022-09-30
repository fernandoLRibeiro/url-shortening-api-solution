import React, { useState } from "react";
import styles from "../styles/Form.module.css";
import PrimaryButton from "./PrimaryButton";

const Form = ({ handleSubmit, error }) => {
  const [link, setLink] = useState("");

  return (
    <form
      className={styles.linkForm}
      onSubmit={(e) => {
        handleSubmit(e, link);
        setLink("");
      }}
    >
      <div className={styles.inputContainer}>
        <input
          value={link}
          type="text"
          className={`${styles.linkInput} ${error ? styles.error : null}`}
          placeholder="Shorten a link here..."
          onChange={(e) => setLink(e.target.value)}
        />
        {error ? <p className={styles.errorText}>Please add a link</p> : null}
      </div>

      <PrimaryButton form type="submit">
        Shorten It!
      </PrimaryButton>
    </form>
  );
};

export default Form;
