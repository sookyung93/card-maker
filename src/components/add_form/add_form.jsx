import React, { useRef } from 'react';
import EditorButton from '../editor_button/editor_button';
import ImageFileUpload from '../image_file_upload/image_file_upload';
import styles from './add_form.module.css';

const AddForm = (props) => {
  const name = useRef();
  const onSubmit = () => {};
  return (
    <form className={styles.editor}>
      <div className={styles.line1}>
        <input
          ref={name}
          className={styles.name}
          type="text"
          placeholder="Name"
        />
        <input className={styles.company} type="text" placeholder="Company" />
        <select className={styles.select} name="" id="">
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="colorful">colorful</option>
        </select>
      </div>
      <div className={styles.line2}>
        <input className={styles.title} type="text" placeholder="Title" />
        <input className={styles.email} type="text" placeholder="Email" />
      </div>
      <div className={styles.line3}>
        <textarea
          className={styles.message}
          type="text"
          placeholder="Message"
        />
      </div>
      <div className={styles.line4}>
        <ImageFileUpload fileName="fild" />
        <EditorButton text="Add" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default AddForm;
