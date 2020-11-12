import React from 'react';
import styles from './card.module.css';

const defaultImg = '/images/default_logo.png';

const Card = ({ card }) => {
  const url = card.fileURL || defaultImg;
  return (
    <li className={`${styles.card} ${getStyles(card.theme)}`}>
      <img className={styles.img} src={url} alt="profile image" />
      <div className={styles.info}>
        <h1 className={styles.name}>{card.name}</h1>
        <p className={styles.company}>{card.company}</p>
        <p className={styles.title}>{card.title}</p>
        <p className={styles.email}>{card.email}</p>
        <p className={styles.message}>{card.message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
  }
}
export default Card;
