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
  rating: string | number,
}

export function TextContent({ author,  title, avatar, dataPostUtc, id, rating}: ITextContentProps) {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  return (
    <div className={styles.textContent}>
        <DateInfo data={ dataPostUtc } avatar={avatar} author={author}/>
      <h2 className={styles.title} onClick={()=>{ setIsModalOpen(true) }}>
        <a href="#post-url" className={styles.postLink}>
          { title }
        </a>
      </h2>
      { isModalOpen && (
        <Post avatar={avatar} author={author} dataPostUtc={dataPostUtc} rating={rating} title={title} id={id} onClose={()=> { setIsModalOpen(false)}}/>
      )}
    </div>
  );
}
