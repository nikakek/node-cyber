import React from 'react';
import styles from './SixthSection.module.css';
import clsx from 'clsx';


const SixthSection = () => {
  return (
    <>
    <section className={clsx(styles.sixthSection, styles.pc)}>
      <div className={styles.sixthSectionTexts}>
        <div>
          <div>Big Summer <span>Sale</span></div>
          <div>Commodo fames vitae vitae leo mauris in. Eu consequat.</div>
        </div>
        <div id={styles.shopNowWhite}><button>Shop Now</button></div>
      </div>
    </section>

    <section className={clsx(styles.sixthSection, styles.mobile)}>
      <div className={styles.sixthSectionTexts}>
        <div>
          <div>Big Summer <span>Sale</span></div>
          <div>Commodo fames vitae vitae leo mauris in. Eu consequat.</div>
        </div>
        <div id={styles.shopNowWhite}><button>Shop Now</button></div>
      </div>
    </section>
  </>
  );
};

export default SixthSection;