import React from 'react';
import styles from './genericlist.css';

interface IItem {
  id: string;
  text: React.ReactNode;
  onClick?: ( id: string) => void;
  className?: string;
  As?: 'a' | 'button' | 'div' | 'li';
  href? : string;
}

interface IGenericListProps {
  list: IItem[];
}

const NOOP = () =>{}

export function GenericList({ list }: IGenericListProps) {
  return (
    <ul>
    {list.map(({As = 'div',id, text, onClick = NOOP, className , href})=>(
      <As 
        className={className}
        onClick={() => onClick(id)}
        key = {id}
        href = {href}
      >
        {text}
      </As>    
    ))}
    </ul>
  )
}
