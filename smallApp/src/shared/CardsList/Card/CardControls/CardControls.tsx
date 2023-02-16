import React from 'react';
import styles from './cardcontrols.css';
import { CommentsButton } from './CommentsButton';
import { Karma } from './Karma';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

export function CardControls() {
  return (
    <div className={styles.controls}>
      <Karma/>
      <CommentsButton/>
      <div className={styles.actions}>
        <ShareButton/>
        <SaveButton/>
      </div>
    </div>
  );
}
