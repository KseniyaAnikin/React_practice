import React from 'react';
import styles from './text.css';
import classNames from 'classnames';

export enum EColors {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 ='grayF4',
  grayF3 = 'grayF3',
  grayD9 = 'grayD9',
  grayC4 = 'grayC4',
  gray99 = 'gray99',
  gray66 = 'gray66',
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps{
  As?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const { As = 'span',
  color = EColors.black ,
  children,
  size,
  mobileSize,
  tabletSize,
  desktopSize,
  bold = false,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles.bold] : bold},
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
  );

  return (
    <As className={classes}> 
      {children}
    </As>
  );
}
