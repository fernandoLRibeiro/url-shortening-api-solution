import React from "react";
import styles from "../styles/AdvancedStatisticsSection.module.css";
import Card from "./Card";
import Form from "./Form";
import PrimaryButton from "./PrimaryButton";

const AdvancedStatisticsSection = () => {
  return (
    <section className={styles.container}>
      <Form />
      <header className={styles.sectionHeader}>
        <h2 className={styles.heading}>Advanced Statistics</h2>
        <p className={styles.headerText}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </header>
      <div className={styles.cardsContainer}>
        <Card
          image="../images/icon-brand-recognition.svg"
          heading="Brand Recognition"
          body="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
        />
        <Card
          image="../images/icon-detailed-records.svg"
          heading="Detailed Records"
          body="Gain insights into who is clicking your links. Knowing when and where 
          people engage with your content helps inform better decisions."
        />
        <Card
          image="../images/icon-fully-customizable.svg"
          heading="Fully Customizable"
          body="Improve brand awareness and content discoverability through customizable 
          links, supercharging audience engagement."
        />
        <div className={styles.breakline} />
      </div>
    </section>
  );
};

export default AdvancedStatisticsSection;
