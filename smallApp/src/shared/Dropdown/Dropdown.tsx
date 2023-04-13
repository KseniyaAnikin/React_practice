import React, { useEffect, useState } from 'react';
import styles from './dropdown.css';
import ReactDOM from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode; //кнопка, принажатии раскрывается ДД (React-компонент)
  children: React.ReactNode; //что выпадает из списка (React-компонент)
  isOpen?: boolean;
  onClick: () => void;
  btnRect: Array<number>;
}

export function Dropdown({button, children, isOpen, onClick, btnRect }: IDropdownProps) {
  console.log(btnRect)
  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
  // let posStyle = {}

  useEffect(() => {
    if(isOpen) {
      setIsDropdownOpen(!isDropdownOpen); 
      // console.log(btnRect)
      // posStyle = {left: btnRect[0], top: btnRect[1] + btnRect[2]}
    };
    if(!isOpen) setIsDropdownOpen(isDropdownOpen)
  }, [isOpen]);

  return (
  <div className={styles.container} >
      <div>{button}</div>

      { isDropdownOpen && (
        <div className={styles.listContainer}  
        // style={posStyle}
        
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