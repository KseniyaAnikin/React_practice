import React, { forwardRef, useEffect, useRef, useState } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import { useCommentData } from '../../hooks/useCommentData';
import { Karma } from '../CardsList/Card/CardControls/Karma';
import { DateInfo } from '../CardsList/Card/TextContent/DateInfo';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';

interface IPost{
  onClose?: ()=>void;
  id: number,
  rating: string | number,
  author: string,
  title: string,
  avatar: string,
  dataPostUtc: string | number | object
}

export function Post( { onClose, title, rating, dataPostUtc, author, avatar, id}: IPost) {
  const ref = useRef<HTMLDivElement>(null);
  const [ answer, setAnswer ] = useState(false);
  const [ name, setName ] = useState('');
  
  const ava = require('../../assets/ava.jpg').default;

  const data = useCommentData(id);

  let commentsList = data.map(el => {
    return <Comment onAnswer = {()=> {setAnswer(!answer); console.log(answer); setName(el.data.author)}} key={el.data.id} author={el.data.author} text={el.data.body} data={ new Date(el.data.created).toLocaleDateString()} avatar={el.data.ava ? el.data.ava : ava}/>
  })

  useEffect(()=>{
    function handleClick(event: MouseEvent){
      if(event.target instanceof Node && !ref.current?.contains(event.target)){
        onClose?.();
      }
    }
    document.addEventListener('click', handleClick );
    return ()=>{
      document.removeEventListener('click', handleClick );
    }
  }, []);

  useEffect(()=>{
    setAnswer(!answer);
  }, [name]);

  const node = document.querySelector('#modal_root');
  if(!node) return null;


  return ReactDOM.createPortal(
    (<div className={styles.modal} ref={ref}>
      <div className={styles.postHead}>
        <Karma rating={rating}/>
        <div style={{marginLeft: '20px'}}>
          <h2 style={{lineHeight: '20px'}}>{title}</h2>
          <DateInfo author={author} avatar={avatar} data={ dataPostUtc }/>
        </div>
      </div>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi reiciendis ducimus dolor aspernatur aut ipsum fuga ipsam! Quisquam aliquid dolore natus quos fuga voluptas, cumque ea id quas facere? Saepe.</p>
      </div>
      <div className={styles.divider} style={{marginBottom: '50px'}}/>
      <CommentForm isAnswer={answer} name={name}/>  
      <ul className={styles.commentsList}>
        {commentsList} 
      </ul>
    </div>
    ), node);  
}
