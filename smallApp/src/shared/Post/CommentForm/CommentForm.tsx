import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import styles from './commentform.css';
import { useFormik } from 'formik';

interface ICommentForm{
  name?: string,
  value: string,
  // onChange: (event: ChangeEvent<HTMLTextAreaElement>)=> void,
  // onSubmit: (event: FormEvent)=> void,
}

const validate = (values: {commentForm: string}) => {
  const errors = { commentForm : '' };

  if (!values.commentForm) {
    errors.commentForm = 'leave a comment, please';
  } else if (values.commentForm.length < 1) {
    errors.commentForm = 'Must be more than 1 letter';
  }
  return errors;
};

export function CommentForm({ name }: ICommentForm) {

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
    validate,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      console.log('OK', values);
    },
  });

  return (
    <form className={styles.form} onSubmit = {formik.handleSubmit}>
      <textarea name="commentForm"
        className={styles.input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.commentForm}/>
        { formik.touched.commentForm && formik.errors.commentForm ? (
         <div>{formik.errors.commentForm}</div>
       ) : null }
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
