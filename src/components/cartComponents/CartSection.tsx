"use client";

import React, { useState, useEffect } from "react";
import styles from "./CartSection.module.css";

const generateUniqueId = () => "#" + Math.random().toString(36).substr(2, 9);

const getCartFromStorage = () => {
  try {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    return storedCart.map((item) => ({
      ...item,
      id: item.id || generateUniqueId(),
    }));
  } catch (e) {
    console.error("Error parsing cart from localStorage, resetting cart:", e);
    return [];
  }
};

const CartSection = () => {
  const [cart, setCart] = useState(getCartFromStorage());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleIncrease = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (productId) => {
    setCart((prevCart) => {
      const product = prevCart.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const handleRemove = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const calculateSubtotal = () => {
    return cart.reduce(
      (sum, item) =>
        sum +
        parseFloat(item.price.toString().replace("$", "")) * item.quantity,
      0
    );
  };

  const TAX = 5.0;
  const SHIPPING = 10.0;

  return (
    <section className={styles.section}>
      <div className={styles.itemsDiv}>
        <div className={styles.title}>Shopping Cart</div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className={styles.item}>
              <img
                src={product.image || "/default.png"}
                alt={product.name}
                className={styles.productImg}
                onError={(e) => {
                  e.currentTarget.src = "/default.png";
                }}
              />
              <div className={styles.nameDiv}>
                <div>{product.name}</div>
                <div>{product.id || "No ID"}</div>
              </div>
              <div className={styles.counterDiv}>
                <div>
                  <img
                    src="/icons/minus.svg"
                    alt="minus"
                    className={styles.minusBtn}
                    onClick={() => handleDecrease(product.id)}
                  />
                  <span>{product.quantity}</span>
                  <img
                    src="/icons/plus.svg"
                    alt="plus"
                    className={styles.plusBtn}
                    onClick={() => handleIncrease(product.id)}
                  />
                </div>
                <div>
                  $
                  {(
                    parseFloat(product.price.toString().replace("$", "")) *
                    product.quantity
                  ).toFixed(2)}
                </div>
                <img
                  src="/icons/Close.svg"
                  alt="close"
                  className={styles.closeButton}
                  onClick={() => handleRemove(product.id)}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <div className={styles.orderDiv}>
        <div className={styles.infoInputs}>
          <div className={styles.infoTitle}>Order Summary</div>
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
              <button className={styles.applyButton} type="button">
                Apply
              </button>
            </div>
          </div>
          <div className={styles.checkout}>
            <div className={styles.totalCost}>
              <span>Subtotal</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className={styles.servicesCost}>
              <span>Estimated Tax</span>
              <span>${TAX.toFixed(2)}</span>
            </div>
            <div className={styles.servicesCost}>
              <span>Estimated Shipping & Handling</span>
              <span>${SHIPPING.toFixed(2)}</span>
            </div>
            <div className={styles.totalCost}>
              <span>Total</span>
              <span>${(calculateSubtotal() + TAX + SHIPPING).toFixed(2)}</span>
            </div>
          </div>
          <div className={styles.checkoutBlack}>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;

export const addToCart = (product) => {
  const cart = getCartFromStorage();
  if (!product.id) {
    product.id = generateUniqueId();
  }
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};
