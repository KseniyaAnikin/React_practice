import React from 'react';
import styles from './header.css';
import {SearchBlock} from './SearchBlock/SearchBlock.tsx'
import { SortBlock } from './SortBlock/SortBlock.tsx';
import { ThreadTitle } from './ThreadTitle/ThreadTitle.tsx';

export function Header() {
  return (
    <header className = { styles.header }>
      <SearchBlock/>
      <ThreadTitle/>
      <SortBlock/>
    </header>
  );
}
