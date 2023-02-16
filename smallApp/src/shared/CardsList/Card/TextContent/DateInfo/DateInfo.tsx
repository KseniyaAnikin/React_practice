import React from 'react';
import styles from './dateinfo.css';

export function DateInfo() {
  return (
    <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          24 часа назад</span>
  );
}
