import React, { useEffect, useRef, useState } from 'react';
import styles from './dropdown.css';
import ReactDOM from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode; //кнопка, принажатии раскрывается ДД (React-компонент)
  children: React.ReactNode; //что выпадает из списка (React-компонент)
  isOpen?: boolean;
  onClick: () => void;
  // btnRect: Array<number>;
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
        <div className={styles.listContainer}  
        // style={{left: `${btnRect[1]-btnRect[3]-30}px`, top: `${btnRect[2] + btnRect[0]+20}px`}} 
        >
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