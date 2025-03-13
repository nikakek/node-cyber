import React from "react";
import styles from "./FourthFifthSection.module.css";
import clsx from "clsx";

const FourthFIfthSection = () => {
  return (
    <>
      <section className={styles.fourthSection}>
        <div className={styles.fourthSectionDiv}>
          <div className={styles.fourthSectionFilter}>
            <div>New Arrival</div>
            <div>Bestseller</div>
            <div>Featured Products</div>
          </div>
          <div className={styles.buyCards}></div>
        </div>
      </section>

      <section className={clsx(styles.fourthSection, styles.fifthSection)}>
        <div className={styles.fourthSectionDiv}>
          <div
            className={clsx(
              styles.fourthSectionFilter,
              styles.fifthSectionFilter
            )}
          >
            <div style={{ border: "none", fontSize: "24px" }}>
              Discounts up to -50%
            </div>
          </div>
          <div className={clsx(styles.discountCards, styles.buyCards)}></div>
        </div>
      </section>
    </>
  );
};

export default FourthFIfthSection;
