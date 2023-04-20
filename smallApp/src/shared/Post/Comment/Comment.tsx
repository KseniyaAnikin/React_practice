import React from 'react';
import { DateInfo } from '../../CardsList/Card/TextContent/DateInfo';
import { CommentsIcon, ShareIcon, WarningIcon } from '../../Icons';
import styles from './comment.css';

interface IComment{
  author: string,
  data: any,
  text: string,
  avatar: any,
  onAnswer: () => void;
}
 export function Comment({ onAnswer, author, data, text, avatar}: IComment) {

  return (
    <li>
      <DateInfo data={data} avatar={avatar} author={author}/>
      <p>{text}</p>
      <div className={styles.commentBtnsList}>
        <button className={styles.commentBtn} onClick={()=> { onAnswer()}}>
          <CommentsIcon/>
          <span className={styles.btnText}>Ответить</span>
        </button>
        <button className={styles.commentBtn}>
          <ShareIcon/>
          <span className={styles.btnText}>Поделиться</span>
        </button>
        <button className={styles.commentBtn}>
          <WarningIcon/>
          <span className={styles.btnText}>Пожаловаться</span>
        </button>
      </div>
    </li>
  );
}





