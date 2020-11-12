import React from 'react';
import styles from './image_file_upload.module.css';

const ImageFileUpload = (props) => (
  <button className={styles.button}>{props.fileName}</button>
);

export default ImageFileUpload;
