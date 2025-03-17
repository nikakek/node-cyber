"use client";
import React from "react";
import styles from "./FourthFifthSection.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

const FourthFIfthSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/jsons/products.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <section className={styles.fourthSection}>
        <div className={styles.fourthSectionDiv}>
          <div className={styles.fourthSectionFilter}>
            <div>New Arrival</div>
            <div>Bestseller</div>
            <div>Featured Products</div>
          </div>
          <div className={styles.buyCards}>
            {data.map((product: any, i: number) => (
              <div className={styles.buyCardDiv} key={i}>
                <img
                  src="/icons/heartIcon.svg"
                  alt="heart"
                  className={styles.heartIcon}
                />
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.itemImage}
                />
                <div className={styles.buyCardDivText}>
                  <div className={styles.itemName}>{product.name}</div>
                  <h4 className={styles.itemPrice}>{product.price}</h4>
                  <div className={styles.buyNowBlack}>
                    <button className={styles.buyNowBtn} data-product-id={i}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
