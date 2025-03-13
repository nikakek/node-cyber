import React from "react";
import styles from "./CartSection.module.css";
import clsx from "clsx";

const CartSection = () => {
  return (
<section className={styles.section}>
      <div className={styles.itemsContainer}></div>
      <div className={styles.orderContainer}>
        <div className={styles.infoInputs}>
          <div className={styles.infoTitle}>Order Summary</div>
          <div className={styles.infoInputsGroup}>
            <label htmlFor="discountCode">Discount code / Promo code</label>
            <input
              type="text"
              id={styles.discountCode}
              name="discountCode"
              placeholder="Code"
              className={styles.codeInput}
            />
          </div>
          <div className={styles.infoInputsGroup}>
            <label htmlFor="bonusCard">Your bonus card number</label>
            <div className={styles.applyNumber}>
              <input
                type="text"
                id={styles.bonusCard}
                name="bonusCard"
                placeholder="Enter Card Number"
              />
              <button className={styles.applyButton} type="button">Apply</button>
            </div>
          </div>
          <div className={styles.checkout}>
            <div className={styles.totalCost}>
              <span>Subtotal</span>
              <span></span>
            </div>
            <div className={styles.servicesCost}>
              <span>Estimated Tax</span>
              <span></span>
            </div>
            <div className={styles.servicesCost}>
              <span>Estimated Shipping & Handling</span>
              <span></span>
            </div>
            <div className={styles.totalCost}>
              <span>Total</span>
              <span></span>
            </div>
          </div>
          <div className={styles.checkoutButtonContainer}>
            <button className={styles.checkoutButton}>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
