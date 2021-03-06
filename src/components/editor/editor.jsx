import React from 'react';
import AddForm from '../add_form/add_form';
import EditorForm from '../editor_form/editor_form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, addNewCard, deleteCard, changeCard }) => {
  return (
    <section className={styles.maker}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.cards}>
        {Object.values(cards).map((card) => (
          <EditorForm
            FileInput={FileInput}
            key={card.id}
            card={card}
            deleteCard={deleteCard}
            changeCard={changeCard}
          />
        ))}
      </ul>
      <AddForm FileInput={FileInput} addNewCard={addNewCard} />
    </section>
  );
};

export default Editor;
