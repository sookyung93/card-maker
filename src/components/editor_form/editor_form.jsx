import React from 'react';
import styles from './editor_form.module.css';

const EditorForm = ({ card }) => {
  return (
    <form className={styles.editor}>
      <div className={styles.line1}>
        <input className={styles.name} type="text" value={card.name} />
        <input className={styles.company} type="text" value={card.company} />
        <select className={styles.select} name="" id="">
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="colorful">colorful</option>
        </select>
      </div>
      <div className={styles.line2}>
        <input className={styles.title} type="text" value={card.title} />
        <input className={styles.email} type="text" value={card.email} />
      </div>
      <div className={styles.line3}>
        <textarea className={styles.message} type="text" value={card.message} />
      </div>
      <div className={styles.line4}>
        <div className={styles.fileName}>{card.fileName}</div>
        <button className={styles.button}>Delete</button>
      </div>
    </form>
  );
};

export default EditorForm;
