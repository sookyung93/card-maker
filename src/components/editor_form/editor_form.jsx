import React from 'react';
import styles from './editor_form.module.css';

const EditorForm = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;
  return (
    <form className={styles.editor}>
      <div className={styles.line1}>
        <input className={styles.name} type="text" value={name} />
        <input className={styles.company} type="text" value={company} />
        <select className={styles.select} name="" id="">
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="colorful">colorful</option>
        </select>
      </div>
      <div className={styles.line2}>
        <input className={styles.title} type="text" value={title} />
        <input className={styles.email} type="text" value={email} />
      </div>
      <div className={styles.line3}>
        <textarea className={styles.message} type="text" value={message} />
      </div>
      <div className={styles.line4}>
        <div className={styles.fileName}>{fileName}</div>
        <button className={styles.button}>Delete</button>
      </div>
    </form>
  );
};

export default EditorForm;
