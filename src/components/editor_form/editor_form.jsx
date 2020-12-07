import React, { memo, useRef } from 'react';
import EditorButton from '../editor_button/editor_button';
import styles from './editor_form.module.css';

const EditorForm = memo(({ FileInput, card, deleteCard, changeCard }) => {
  const { name, company, title, email, message, theme, fileName } = card;

  const onSubmit = (event) => {
    event.preventDefault();
    deleteCard(card);
  };

  const nameRef = useRef();

  const onFileChange = (file) => {
    changeCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    // const uid = card.id;
    // const item = event.target.name;
    // const value = event.target.value;
    changeCard({
      ...card,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form className={styles.editor}>
      <div className={styles.line1}>
        <input
          ref={nameRef}
          className={styles.name}
          type="text"
          name="name"
          defaultValue={name}
          onChange={onChange}
        />
        <input
          className={styles.company}
          type="text"
          name="company"
          defaultValue={company}
          onChange={onChange}
        />
        <select
          className={styles.select}
          name="theme"
          id="selectTheme"
          value={theme}
          onChange={onChange}
        >
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="colorful">colorful</option>
        </select>
      </div>
      <div className={styles.line2}>
        <input
          className={styles.title}
          type="text"
          name="title"
          defaultValue={title}
          onChange={onChange}
        />
        <input
          className={styles.email}
          type="text"
          name="email"
          defaultValue={email}
          onChange={onChange}
        />
      </div>
      <div className={styles.line3}>
        <textarea
          className={styles.message}
          type="text"
          name="message"
          defaultValue={message}
          onChange={onChange}
        />
      </div>
      <div className={styles.line4}>
        <FileInput fileName={fileName} onFileChange={onFileChange} />
        <EditorButton text="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
});

export default EditorForm;
