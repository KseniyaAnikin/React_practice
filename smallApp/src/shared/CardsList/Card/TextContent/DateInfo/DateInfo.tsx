import React from 'react';
import styles from './dateinfo.css';

interface IDateProps {
  data: string | number | object,
  author: string,
  avatar: string,
}

export function DateInfo({data, avatar, author}: IDateProps) {
  return (
    <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar}
            src={avatar} alt="avatar" />
          <a href="#user-url" className={styles.username}>{ author }</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {data}</span>
      </div>
  );
}
