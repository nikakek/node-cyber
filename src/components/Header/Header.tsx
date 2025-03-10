import React from 'react';
import styles from './Header.module.css';
import clsx from 'clsx';

type Props = {};

function Header({}: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <div className={styles.headerLogo}>
          <img src="./icons/cyberLogo.svg" alt="cyber logo" />
        </div>
        <div className={clsx(styles.searchBar, 'pc')}>
          <img src="./icons/search-icon.svg" alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className={clsx(styles.headerLinks, 'pc')}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact Us</a>
          <a href="">Blog</a>
        </div>
        <div className={clsx(styles.headerIcons, 'pc')}>
          <div>
            <img src="./icons/heartIcon.svg" alt="heart icon" />
          </div>
          <div>
            <a href="./shopping.html">
              <img src="./icons/shopping-cart.svg" alt="shopping cart icon" />
            </a>
          </div>
          <div>
            <img src="./icons/user-icon.svg" alt="user icon" />
          </div>
        </div>
        <div className={clsx(styles.headerMenu, 'mobile')}>
          <img src="./icons/menu-icon.svg" alt="menu icon" />
        </div>
      </div>
    </header>
    
  );
}

export default Header;