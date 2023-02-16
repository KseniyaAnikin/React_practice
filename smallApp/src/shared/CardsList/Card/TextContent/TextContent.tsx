import React from 'react';
import { DateInfo } from './DateInfo';
import styles from './textcontent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar}
            src="https://ltdfoto.ru/images/2023/01/20/IMAGE-2023-01-20-123147.th.jpg" alt="avatar" />
          <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
        </div>
        <DateInfo/>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse repellendus nemo soluta modi distinctio. Reprehenderit tempore, minima corporis quo enim cum hic esse ipsa possimus sequi, facere quia labore.
        </a>
      </h2>
    </div>
  );
}
