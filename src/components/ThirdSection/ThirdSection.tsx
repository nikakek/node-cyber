import React from 'react';
import styles from './ThirdSection.module.css';
import clsx from 'clsx';

const ThirdSection = () => {
  return (
    <section className="thirdSection">
    <div className="thirdSectionDiv">
        <div className="thirdSectionText">
        <h2>Browse By Category</h2>
        <div className="thirdSectionArrows">
            <img src="/icons/Arrow.svg" alt="left arrow" />
            <img src="/icons/Arrow.svg" alt="left arrow" style={{ transform: "rotate(180deg)" }} />
        </div>
        </div>
        <div className="thirdSectionCards">
        <div className="card">
            <img src="/images/Phones.svg" alt="phone" />
            <h3>Phones</h3>
        </div>
        <div className="card">
            <img src="/images/Phones.svg" alt="phone" />
            <h3>Phones</h3>
        </div>
        <div className="card">
            <img src="/images/Phones.svg" alt="phone" />
            <h3>Phones</h3>
        </div>
        <div className="card">
            <img src="/images/Phones.svg" alt="phone" />
            <h3>Phones</h3>
        </div>
        <div className="card">
            <img src="/images/Phones.svg" alt="phone" />
            <h3>Phones</h3>
        </div>
        <div className="card">
            <img src="/images/Phones.svg" alt="phone" />
            <h3>Phones</h3>
        </div>
        </div>
    </div>
    </section>
  );
};

export default ThirdSection;