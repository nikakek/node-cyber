'use client';
import React from 'react';
import styles from './Header.module.css';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {};

function Header({}: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <div className={styles.headerLogo}>
        <Link href="./">
          <img src="./icons/cyberLogo.svg" alt="cyber logo" />
        </Link>
        </div>
        <div className={clsx(styles.searchBar, styles.pc)}>
          <img src="./icons/search-icon.svg" alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className={clsx(styles.headerLinks, styles.pc)}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact Us</a>
          <a href="">Blog</a>
        </div>
        <div className={clsx(styles.headerIcons, styles.pc)}>
          <div>
            <img src="./icons/heartIcon.svg" alt="heart icon" />
          </div>
          <div>
          <Link href="./cart">
            <img src="./icons/shopping-cart.svg" alt="shopping cart icon" />
          </Link>
          </div>
          <div>
            <img src="./icons/user-icon.svg" alt="user icon" />
          </div>
        </div>
        <div className={clsx(styles.headerMenu, styles.mobile)}>
          <img src="./icons/menu-icon.svg" alt="menu icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;