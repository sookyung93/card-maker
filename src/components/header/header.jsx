import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout = true }) => {
  return (
    <header className={styles.header}>
      {onLogout && <button className={styles.logout}>Logout</button>}
      <img className={styles.logo} src="/images/logo.png" alt="" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
};

export default Header;
