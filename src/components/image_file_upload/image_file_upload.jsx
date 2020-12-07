import React, { memo, useRef, useState } from 'react';
import styles from './image_file_upload.module.css';

const ImageFileUpload = memo(({ imageUploader, fileName, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
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
      {!loading && (
        <button className={styles.button} onClick={onButtonClick}>
          {fileName || 'No file'}
        </button>
      )}
      {loading && <div className={styles.loadingSpin}></div>}
    </div>
  );
});

export default ImageFileUpload;
