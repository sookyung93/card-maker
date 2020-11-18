import React from 'react';
import Card from '../card/card';
import styles from './card_preview.module.css';

const CardPreview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {Object.values(cards).map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default CardPreview;
