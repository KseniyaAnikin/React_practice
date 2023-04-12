import React, { useState } from 'react';
import styles from './dropdown.css';
import ReactDOM from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode; //кнопка, принажатии раскрывается ДД (React-компонент)
  children: React.ReactNode; //что выпадает из списка (React-компонент)
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const noop = () => {};

export function Dropdown({button, children, isOpen, onClose = noop, onOpen = noop}: IDropdownProps) {

  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);

  return (
  <div className={styles.container}>
      <div onClick={() => { setIsDropdownOpen(true) }}>{button}</div>

      {isDropdownOpen && (
        <div className={styles.listContainer} >
          <div className={styles.list} onClick={()=> setIsDropdownOpen(false)}>
            { children }
          </div>
        </div>
      )}
    </div>
    );

  // const [ isDropdownOpen, setIsDropdownOpen ] = React.useState(isOpen);
  // React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  // React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  // const handleOpen = () => {
  //   if (isOpen === undefined) {
  //       setIsDropdownOpen(!isDropdownOpen)
  //   }
  // }
  // return (
  //   <div className={styles.container}>
  //     <div onClick={() => {handleOpen()}}>{button}</div>

  //     {isDropdownOpen && (
  //       <div className={styles.listContainer}>
  //         <div className={styles.list} onClick={()=> setIsDropdownOpen(false)}>
  //           { children }
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}
//возвращает логику выпадение чего угодно откуда угодно