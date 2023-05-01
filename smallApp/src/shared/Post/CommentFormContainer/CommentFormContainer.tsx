import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../../store/reduser';
import { CommentForm } from '../CommentForm/CommentForm';

interface ICommentFormContainer{
  name: string,
}

export function CommentFormContainer({ name }: ICommentFormContainer) {
  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    console.log(value)  
  }

  return (
    <CommentForm
      value = {value}
      // onChange = { handleChange }
      // onSubmit = { handleSubmit }
      name={name}
    />
  );
}
