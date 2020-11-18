import React, { useRef } from 'react';
import ImageFileUpload from '../image_file_upload/image_file_upload';
import EditorButton from '../editor_button/editor_button';
import styles from './editor_form.module.css';

const EditorForm = ({ card, deleteCard, changeCard }) => {
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

  const onSubmit = (event) => {
    event.preventDefault();
    deleteCard(card);
  };

  const nameRef = useRef();
  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    const uid = card.id;
    const item = event.target.name;
    const value = event.target.value;
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
        <ImageFileUpload fileName={fileName} />
        <EditorButton text="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default EditorForm;
