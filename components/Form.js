import React from "react";
import styles from "../styles/Form.module.css";
import PrimaryButton from "./PrimaryButton";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.linkForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.linkInput}
        placeholder="Shorten a link here..."
      />
      <PrimaryButton form type="submit">
        Shorten It!
      </PrimaryButton>
    </form>
  );
};

export default Form;
