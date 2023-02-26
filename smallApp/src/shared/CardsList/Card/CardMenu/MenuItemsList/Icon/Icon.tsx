import React from 'react';
import styles from './icon.css';
import { BlockIcon, WarningIcon, SaveIcon, ShareIcon, CommentsIcon } from '../../../../../Icons';
import classNames from 'classnames';

type TSizes =  16 | 14 | 12 ;

export enum EIcons {
  block = 'BlockIcon',
  warning = 'WarningIcon',
  save = 'SaveIcon',
  share = 'ShareIcon',
  comments = 'CommentsIcon',
}

const icon = {
  [ EIcons.block ] : <BlockIcon/>,
  [ EIcons.warning ] : <WarningIcon/>,
  [ EIcons.save ] : <SaveIcon/>,
  [ EIcons.share ] : <ShareIcon/>,
  [ EIcons.comments ] : <CommentsIcon/>,
} 

interface IIconsProps {
  size: TSizes;
  svg: EIcons;
}

export function Icon({size, svg}: IIconsProps) {
 

  return (
    <div>{icon[svg]}</div>
  );
}
