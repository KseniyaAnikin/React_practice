import React from 'react';
import styles from './preview.css';

interface IUserPreviewProps {
  prevImg?: string;
}

export function Preview({prevImg} :IUserPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={prevImg} />
    </div>
  );
}
