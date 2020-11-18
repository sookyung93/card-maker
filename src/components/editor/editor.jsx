import React from 'react';
import AddForm from '../add_form/add_form';
import EditorForm from '../editor_form/editor_form';
import styles from './editor.module.css';

const Editor = ({ cards, addNewCard, deleteCard }) => {
  return (
    <section className={styles.maker}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <EditorForm key={card.id} card={card} deleteCard={deleteCard} />
        ))}
      </ul>
      <AddForm addNewCard={addNewCard} />
    </section>
  );
};

export default Editor;
