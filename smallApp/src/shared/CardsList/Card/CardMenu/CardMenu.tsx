import React from 'react';
import { merge } from '../../../../utils/js/merge';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import styles from './cardmenu.css';
// import './img'

const LIST = [
  {text: 'Комментарии'},
  {text: 'Поделиться'},
  {text: 'Скрыть'},
  {text: 'Сохранить'},
  {text: 'Пожаловаться'}
].map(generateId)

export function CardMenu() {

    return (
      <Dropdown 
        button = {
          <button className={styles.menuButton} onClick={(e)=> {e.stopPropagation()}}>
            <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
              <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
              <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
            </svg>
          </button>
        }>
          <ul>
            <GenericList list={LIST}/>
          </ul>
      </Dropdown>
    );
  }

// export function CardMenu() {
//   return (
//     <div className={styles.menu}>
//       <button className={styles.menuButton}>
//         <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
//           <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
//           <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
//         </svg>
//       </button>
//     </div>
//   );
// }
