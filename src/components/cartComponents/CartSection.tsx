import React from "react";
import styles from "./CartSection.module.css";
import clsx from "clsx";

const CartSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.itemsDiv}>
        
      </div>
      <div className={styles.orderDiv}>
        <div className={styles.infoInputs}>
          <div className={styles.infoTitle}>Order Sumarry</div>
          <div className={styles.infoInputsDiv}>
            <label htmlFor="discountCode">Discount code / Promo code</label>
            <input
              type="text"
              id="discountCode"
              name="discountCode"
              placeholder="Code"
              className={styles.codeInput}
            />
          </div>
          <div className={styles.infoInputsDiv}>
            <label htmlFor="bonusCard">Your bonus card number</label>
            <div className={styles.applyNumber}>
              <input
                type="text"
                id="bonusCard"
                name="bonusCard"
                placeholder="Enter Card Number"
                className={styles.bonusInput}
              />
              <button className={styles.applyButton} type="submit">Apply</button>
            </div>
          </div>
          <div className={styles.checkout}>
            <div className={styles.totalCost}><span>Subtotal</span><span></span></div>
            <div className={styles.servicesCost}>
              <span>Estimated Tax</span><span></span>
            </div>
            <div className={styles.servicesCost}>
              <span>Estimated shipping & Handling</span><span></span>
            </div>
            <div className={styles.totalCost}><span>Total</span><span></span></div>
          </div>
          <div className={styles.checkoutBlack}><button>Checkout</button></div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
