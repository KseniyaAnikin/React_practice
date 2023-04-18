import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import styles from './commentform.css';


interface ICommentForm{
  isAnswer?: boolean,
  name?: string,
}

export function CommentForm({isAnswer, name}: ICommentForm) {
  const [ value, setValue ] = useState('');
  const formRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if(name) {
      setValue(`${name}, оставьте ваш комментарий`); 
      formRef.current?.focus()
    };
    if(!name) 
    setValue(value)
  }, [isAnswer]);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    console.log(value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} ref={formRef}/>
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}
