import React from 'react';
import { CardControls } from './CardControls';
import { CardMenu } from './CardMenu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';
import styles from './card.css';

interface ICardProps{
  author: string,
  title: string,
  img: string,
  avatar: string,
  dataPostUtc: any,
  rating: string | number,
  num: number,
}

export function Card({ author,  title , img, avatar , dataPostUtc, rating, num }: ICardProps) {
  return (
    <li className= {styles.card} id={'cardbtn'}>
      <TextContent rating={rating} dataPostUtc={dataPostUtc} avatar={avatar} author = {author} title={title} id={num} />
      <Preview prevImg = {img}/>
      <CardMenu/>
      <CardControls rating={rating}/>
    </li>

  );
}
