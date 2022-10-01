import React from "react";
import styles from "../styles/Footer.module.css";

const footerLinks = [
  {
    label: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    label: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    label: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src="/images/logo.svg" />
      <div className={styles.container}>
        {footerLinks.map((item) => (
          <div className={styles.linkListContainer}>
            <h4 className={styles.linkListLabel}>{item.label}</h4>
            <ul className={styles.linkList}>
              {item.links.map((link) => (
                <li className={styles.linkContainer}>
                  <a className={styles.link} href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.socials}>
          <a className={styles.socialLink} href="https://facebook.com">
            <img
              className={styles.socialIcon}
              src="/images/icon-facebook.svg"
            />
          </a>
          <a className={styles.socialLink} href="https://twitter.com">
            <img className={styles.socialIcon} src="/images/icon-twitter.svg" />
          </a>
          <a className={styles.socialLink} href="https://pinterest.com">
            <img
              className={styles.socialIcon}
              src="/images/icon-pinterest.svg"
            />
          </a>
          <a className={styles.socialLink} href="https://instagram.com">
            <img
              className={styles.socialIcon}
              src="/images/icon-instagram.svg"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
