import React, { useEffect, useState } from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode; //кнопка, принажатии раскрывается ДД (React-компонент)
  children: React.ReactNode; //что выпадает из списка (React-компонент)
  isOpen?: boolean;
  onClick: () => void;
}

export function Dropdown({button, children, isOpen, onClick}: IDropdownProps) {

  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);

  useEffect(() => {
    if(isOpen) {
      setIsDropdownOpen(!isDropdownOpen); 
    };
    if(!isOpen) setIsDropdownOpen(isDropdownOpen)
  }, [isOpen]);

  return (
  <div className={styles.container} >
      <div>{button}</div>

      { isOpen && ( 
        <div className={styles.listContainer}>
          <div className={styles.list}  onClick={()=> {
            onClick();
            setIsDropdownOpen(false)
            }}>
            { children }
          </div>
        </div>
      )}
    </div>
    );
}
//возвращает логику выпадение чего угодно откуда угодно