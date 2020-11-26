import React, { useRef } from 'react';
import styles from './image_file_upload.module.css';

const ImageFileUpload = ({ imageUploader, fileName, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  const btnColor = fileName !== null ? styles.namedBtn : styles.unnamedBtn;
  return (
    <div className={`${styles.container} ${btnColor}`}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {fileName || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileUpload;
