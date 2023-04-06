import React from 'react';
import styles from './dateinfo.css';

interface IDateProps {
  data: any
}

export function DateInfo({data}: IDateProps) {
  return (
    <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {data}</span>
  );
}
