import React from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode; //кнопка, принажатии раскрывается ДД (React-компонент)
  children: React.ReactNode; //что выпадает из списка (React-компонент)
}

export function Dropdown({button, children }: IDropdownProps) {

  const [ isDropdownOpen, setIsDropdownOpen ] = React.useState(false);

  return (
    <div className={styles.container}>
    {/* определяем кнопку */}
      <div onClick={()=> setIsDropdownOpen(!isDropdownOpen)}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={()=> setIsDropdownOpen(false)}>
            { children }
          </div>
        </div>
      )}
    </div>
  );
}
//возвращает логику выпадение чего угодно откуда угодно