import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import styles from './commentform.css';
import { useFormik } from 'formik';

interface ICommentForm{
  name?: string,
  value: string,
  onChange: (event: ChangeEvent<HTMLTextAreaElement>)=> void,
  onSubmit: (event: FormEvent)=> void,
}

export function CommentForm({ name, onChange, onSubmit}: ICommentForm) {

  const [ person, setPerson ] = useState('');
  
  const formRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    if(name) {
      setPerson(name+',');
      console.log(person)
      formRef.current?.focus() 
    };
  }, [name]);

  const formik = useFormik({
    initialValues: {
      commentForm : '' ,
    },
    validate(values){
      const errors = {commentForm : '' , };
      if (!values.commentForm) {
            errors.commentForm = 'leave a comment, please';
            return errors;
      }
      
    },
    onSubmit:(values, { resetForm })=> {
      alert("Ваш комментарий отправлен");
      resetForm()
      console.log('values-', values.commentForm);
    },
  });

  return (
    <form className={styles.form} onSubmit = {formik.handleSubmit}>
      <textarea name="commentForm"
        className={styles.input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.commentForm ? formik.values.commentForm : `${person} оставьте ваш комментарий`}/>
        { formik.touched.commentForm && formik.errors.commentForm ? (
         <div>{formik.errors.commentForm }</div>
       ) : null }
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
