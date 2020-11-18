import React, { useRef } from 'react';
import ImageFileUpload from '../image_file_upload/image_file_upload';
import EditorButton from '../editor_button/editor_button';
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
  const onSubmit = () => {};
  return (
    <form className={styles.editor}>
      <div className={styles.line1}>
        <input className={styles.name} type="text" defaultValue={name} />
        <input className={styles.company} type="text" defaultValue={company} />
        <select className={styles.select} name="" id="selectTheme">
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="colorful">colorful</option>
        </select>
      </div>
      <div className={styles.line2}>
        <input className={styles.title} type="text" defaultValue={title} />
        <input className={styles.email} type="text" defaultValue={email} />
      </div>
      <div className={styles.line3}>
        <textarea
          className={styles.message}
          type="text"
          defaultValue={message}
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
