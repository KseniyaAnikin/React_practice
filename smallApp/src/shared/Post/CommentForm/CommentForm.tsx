import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import styles from './commentform.css';

interface ICommentForm{
  name?: string,
  value: string,
  onChange: (event: ChangeEvent<HTMLTextAreaElement>)=> void,
  onSubmit: (event: FormEvent)=> void,
}

export function CommentForm({ name, value, onChange, onSubmit}: ICommentForm) {
  
  const formRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    if(name) {
      formRef.current?.focus()
    };
  }, [name]);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea className={styles.input} value={value} onChange={onChange} ref={formRef}/>
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}
