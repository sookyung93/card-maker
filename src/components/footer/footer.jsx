import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo((props) => {
  return (
    <section className={styles.footer}>
      <h1>CardMaker by SOOKYUNG</h1>
    </section>
  );
});

export default Footer;
