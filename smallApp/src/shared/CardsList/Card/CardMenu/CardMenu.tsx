import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../Icons';
import styles from './cardmenu.css';
import { MenuItemsList } from './MenuItemsList';

export function CardMenu() {
    return (
      <div className={styles.menu} >
        <Dropdown 
          button = {
            <button className={styles.menuButton} >
              <MenuIcon/>
            </button>
          }>            
          <MenuItemsList/>
        </Dropdown>
      </div>
    );
  }

