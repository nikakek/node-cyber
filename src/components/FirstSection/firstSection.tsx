import React from 'react';
import styles from './FirstSection.module.css';
import clsx from 'clsx';


const FirstSection = () => {
  return (
<section className={styles.firstSection}>
  <div className={styles.firstSectionDiv}>
    <div className={styles.firstSectionTexts}>
      <div id={styles.firstSectionTexts1}>Pro.Beyond.</div>
      <div id={styles.firstSectionTexts2}>
        IPhone 14 <span>Pro</span>
      </div>
      <div id={styles.firstSectionTexts3}>
        Created to change everything for the better. For everyone
      </div>
      <div id={styles.shopNowWhite}>
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