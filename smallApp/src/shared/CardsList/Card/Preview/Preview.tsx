import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://ltdfoto.ru/images/2023/01/20/IMAGE-2023-01-20-123142.jpg" />
    </div>
  );
}
