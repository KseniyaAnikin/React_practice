import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import styles from './commentform.css';

interface ICommentForm{
  name?: string,
  value: string,
  onChange: (event: ChangeEvent<HTMLTextAreaElement>)=> void,
  onSubmit: (event: FormEvent)=> void,
}

export function CommentForm({ name, value, onChange, onSubmit}: ICommentForm) {

  const [ person, setPerson ] = useState('');
  
  const formRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    if(name) {
      setPerson(name+',');
      console.log(person)
      formRef.current?.focus() 
    };
  }, [name]);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea className={styles.input} value={value ? value :`${person} оставьте ваш комментарий`} onChange={onChange} ref={formRef}/>
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}
