import React from 'react';
import styles from './FirstSection.module.css';
import clsx from 'clsx';


const FirstSection = () => {
  return (
    <section className={styles.firstSection}>
      <div className={styles.firstSectionDiv}>
        <div className={styles.firstSectionTexts}>
          <div id="first-section-texts-1">Pro.Beyond.</div>
          <div id="first-section-texts-2">
            IPhone 14 <span>Pro</span>
          </div>
          <div id="first-section-texts-3">
            Created to change everything for the better. For everyone
          </div>
          <div id="shop-now-white">
            <button>Shop Now</button>
          </div>
        </div>

        <div className={clsx(styles.firstSectionImagePc, styles.pc)}>
          <img src="./images/iphone-image.svg" alt="iphone image" />
        </div>
        <div className={clsx(styles.firstSectionImageMobile, styles.mobile)}>
          <img src="./images/iphone-image-mobile.svg" alt="iphone image" />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;