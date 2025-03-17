import React from 'react';
import clsx from 'clsx';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerDiv}>
          <div className={styles.footerText}>
            <div>
              <img src="/icons/footer-logo.svg" alt="cyber logo" />
            </div>
            <div>
              <p>
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerServices}>
              <h2>Services</h2>
              <ul>
                <li><a href="">Credit and payment</a></li>
                <li><a href="">Credit and payment</a></li>
                <li><a href="">Credit and payment</a></li>
                <li><a href="">Credit and payment</a></li>
                <li><a href="">Credit and payment</a></li>
                <li><a href="">Credit and payment</a></li>
              </ul>
            </div>
            <div className={styles.footerServices}>
              <h2>Assistance to the buyer</h2>
              <ul>
                <li><a href="">Terms of delivery</a></li>
                <li><a href="">Terms of delivery</a></li>
                <li><a href="">Terms of delivery</a></li>
                <li><a href="">Terms of delivery</a></li>
                <li><a href="">Terms of delivery</a></li>
                <li><a href="">Terms of delivery</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerContact}>
          <div>
            <a href="">
              <img src="/icons/Twitter.svg" alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src="/icons/Twitter.svg" alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src="/icons/Twitter.svg" alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src="/icons/Twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;