import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
  return (
    <li className={styles.card}>
      <img class={styles.img} src={props.card.fileURL} alt="profile image" />
      <div className={styles.info}>
        <h1 className={styles.name}>{props.card.name}</h1>
        <p className={styles.company}>{props.card.company}</p>
        <p className={styles.title}>{props.card.title}</p>
        <p className={styles.email}>{props.card.email}</p>
        <p className={styles.message}>{props.card.message}</p>
      </div>
    </li>
  );
};

export default Card;
