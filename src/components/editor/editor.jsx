import React from 'react';
import EditorForm from '../editor_form/editor_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => {
  return (
    <section className={styles.maker}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <EditorForm key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default Editor;
