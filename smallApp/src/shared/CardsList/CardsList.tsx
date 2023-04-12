import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {

  const  data  = useContext(postsContext);
  
  let list = data.map(el => {
    return <Card num={el.id} rating={el.rating} dataPostUtc={el.dataPostUtc} avatar={el.avatar} img={el.previewImg} key={el.id} author={el.author} title={el.title} />
  })

  return (
    <ul className={styles.cardslist}>
      {list} 
    </ul>
  );
}
