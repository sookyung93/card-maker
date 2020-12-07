import React, { memo } from 'react';
import styles from './editor_button.module.css';

const EditorButton = memo(({ text, onClick }) => {
  const bgColor = text === 'Delete' ? styles.delete : styles.add;
  return (
    <button className={`${styles.button} ${bgColor}`} onClick={onClick}>
      {text}
    </button>
  );
});

export default EditorButton;
