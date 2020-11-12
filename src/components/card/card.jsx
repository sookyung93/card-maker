import React from 'react';
import styles from './card.module.css';

const defaultImg = '/images/default_logo.png';

const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  const url = fileURL || defaultImg;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.img} src={url} alt="profile image" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
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
    default:
      throw new Error(`unknow theme: ${theme}`);
  }
}
export default Card;
