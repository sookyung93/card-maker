import React, { useRef } from 'react';
import EditorButton from '../editor_button/editor_button';
import ImageFileUpload from '../image_file_upload/image_file_upload';
import styles from './add_form.module.css';

const AddForm = ({ addNewCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    formRef.current.reset();
    addNewCard(card);
  };
  return (
    <form ref={formRef} className={styles.editor}>
      <div className={styles.line1}>
        <input
          ref={nameRef}
          className={styles.name}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          ref={companyRef}
          className={styles.company}
          type="text"
          name="company"
          placeholder="Company"
        />
        <select ref={themeRef} className={styles.select} name="theme" id="">
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="colorful">colorful</option>
        </select>
      </div>
      <div className={styles.line2}>
        <input
          ref={titleRef}
          className={styles.title}
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          ref={emailRef}
          className={styles.email}
          type="text"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className={styles.line3}>
        <textarea
          ref={messageRef}
          className={styles.message}
          type="text"
          name="message"
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
