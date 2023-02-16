import React from 'react';
import styles from './card.css';
import { CardControls } from './CardControls';
import { CardMenu } from './CardMenu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function Card() {
  return (
    <li className= {styles.card}>
      <TextContent/>
      <Preview/>
      <CardMenu/>
      <CardControls/>
    </li>

  );
}
