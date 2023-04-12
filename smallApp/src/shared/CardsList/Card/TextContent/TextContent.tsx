import React, { useState } from 'react';
import { DateInfo } from './DateInfo';
import styles from './textcontent.css';
import { Post } from '../../../Post';

interface ITextContentProps{
  author: string,
  title: string,
  avatar: string,
  dataPostUtc: string | number | object, 
  id: number, 
}

export function TextContent({ author,  title, avatar, dataPostUtc, id}: ITextContentProps) {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar}
            src={avatar} alt="avatar" />
          <a href="#user-url" className={styles.username}>{ author }</a>
        </div>
        <DateInfo data={ dataPostUtc }/>
      </div>
      <h2 className={styles.title} onClick={()=>{ setIsModalOpen(true) }}>
        <a href="#post-url" className={styles.postLink}>
          { title }
        </a>
      </h2>
      { isModalOpen && (
        <Post id={id} onClose={()=> { setIsModalOpen(false)}}/>
      )}
    </div>
  );
}
