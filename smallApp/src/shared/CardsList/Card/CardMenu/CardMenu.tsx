import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../Icons';
import styles from './cardmenu.css';
import { MenuItemsList } from './MenuItemsList';

export function CardMenu() {
  const [isOpen, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [btnRect, setBtnRect] = useState([0,0]);

  useEffect(() => {
    if (isOpen) {
      if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setBtnRect([rect.left, rect.top, rect.height]);
    }
  }, [isOpen])

    return (
      <div className={styles.menu} >
        <Dropdown {...{onClick: () => setOpen(!isOpen), isOpen, btnRect }}
          button = {
            <button className={styles.menuButton} ref ={btnRef} onClick={()=>{ setOpen(!isOpen) }}>
              <MenuIcon/>
            </button>
          } >            
          <MenuItemsList/>
        </Dropdown>
      </div>
    );
  }

