import React from 'react';
import styles from './editor_button.module.css';

const EditorButton = ({ text, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {text}
  </button>
);

export default EditorButton;
