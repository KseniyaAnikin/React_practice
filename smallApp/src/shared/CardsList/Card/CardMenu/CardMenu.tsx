import React from 'react';
import { merge } from '../../../../utils/js/merge';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import styles from './cardmenu.css';
import  { MenuIcon } from '../../../Icons'
import { EColors, Text } from '../../../Text';
import { MenuItemsList } from './MenuItemsList';
import { EIcons, Icon } from './MenuItemsList/Icon';



const LIST = [
  { As: 'li' as const, text: <><Icon size={16} svg={EIcons.comments}/> <span>Комментарии</span> <div className={styles.divider}/> </> , className: 'list-item hide' },
  { As: 'li' as const, text: <><Icon size={16} svg={EIcons.share}/> <span>Поделиться</span> <div className={styles.divider}/></>, className: 'list-item hide'},
  { As: 'li' as const, text: <><Icon size={16} svg={EIcons.block}/><span>Скрыть</span><div className={styles.divider}/></>, className: 'list-item'},
  { As: 'li' as const, text: <><Icon size={16} svg={EIcons.save}/><span>Сохранить</span><div className={styles.divider}/></>, className: 'list-item hide'},
  { As: 'li' as const, text: <><Icon size={16} svg={EIcons.warning}/><span>Пожаловаться</span></>, className: 'list-item'},
  {As: 'li' as const, text: 'Закрыть', className: 'list-item last-item',}
].map(generateId)

export function CardMenu() {
    return (
      <div className={styles.menu}>
        <Dropdown 
          button = {
            <button className={styles.menuButton}>
              <MenuIcon/>
            </button>
          }>            
          <GenericList list={LIST}/>
        </Dropdown>
      </div>
    );
  }

// export function CardMenu() {
//   return (
//     <div className={styles.menu}>
//       <Dropdown 
//         button = {
//           <button className={styles.menuButton}>
//             <MenuIcon/>
//           </button>
//         }>            
//         <div className={styles.dropdown}>
//           <MenuItemsList/>
//           <button className={styles.closeButton}>
//             <Text mobileSize={12} size={14} color={EColors.gray66}>
//               Закрыть
//             </Text>
//           </button>
//         </div>
//       </Dropdown>
//     </div>
//   );
// }
