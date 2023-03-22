import React, { useContext } from 'react';
import { tokenContext } from '../context/tokenContext';
import styles from './header.css';
import {SearchBlock} from './SearchBlock'
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle';

export function Header() {
  const token = useContext(tokenContext)

  return (
    <header className = { styles.header }>
      <SearchBlock token = {token}/> 
      <ThreadTitle/>
      <SortBlock/>
    </header>
  );
}
