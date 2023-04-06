import React from 'react';
import styles from './cardcontrols.css';
import { CommentsButton } from './CommentsButton';
import { Karma } from './Karma';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

interface IControlsProps {
  rating: string | number
}

export function CardControls({ rating }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <Karma rating={rating} />
      <CommentsButton/>
      <div className={styles.actions}>
        <ShareButton/>
        <SaveButton/>
      </div>
    </div>
  );
}
