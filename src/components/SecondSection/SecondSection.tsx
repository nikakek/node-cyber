import React from 'react';
import styles from './SecondSection.module.css';

const SecondSection = () => {
  return (
    <section className={styles.secondSection}>
      <div className={styles.secondSectionDiv}>
        <div className={`${styles.item} ${styles.playstation}`}>
          <img src="/images/PlayStation.svg" alt="playstation" className={styles.pc} />
          <img src="/images/PlayStation-mobile.svg" alt="playstation" className={styles.mobile} />
          <div className={styles.playstationContent}>
            <div className={styles.playstationText}>
              PlayStation <span>5</span>
            </div>
            <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
          </div>
        </div>

        <div className={`${styles.item} ${styles.macbook}`}>
          <img src="/images/macbook-mobile.svg" alt="macbook" className={styles.mobile} />
          <div className={styles.macbookTexts}>
            <div className={styles.macbookTexts1}>Macbook <span>Air</span></div>
            <div className={styles.macbookTexts2}>
              The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
            </div>
            <div className={styles.shopNowBlack}>
              <button>Shop Now</button>
            </div>
          </div>
          <img src="/images/macbook.svg" alt="macbook" className={styles.pc} />
        </div>

        <div className={`${styles.item} ${styles.airpods}`}>
          <img src="/images/headphone.svg" alt="headphone" className={styles.pc} />
          <img src="/images/headphone-mobile.svg" alt="headphone" className={styles.mobile} />
          <div className={styles.airpodsDiv}>
            <div className={styles.airpodsText}>Apple AirPods <span>Max</span></div>
            <p>Computational audio. Listen, it's powerful</p>
          </div>
        </div>

        <div className={`${styles.item} ${styles.vision}`}>
          <img src="/images/visionPro.svg" alt="vision pro image" className={styles.pc} />
          <img src="/images/visionPro-mobile.svg" alt="vision pro" className={styles.mobile} />
          <div className={styles.airpodsDiv}>
            <div className={styles.airpodsText}>Apple Vision <span>Pro</span></div>
            <p>An immersive way to experience entertainment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;