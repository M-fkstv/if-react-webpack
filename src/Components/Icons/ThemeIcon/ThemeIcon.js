import React from 'react';

import { useSelector } from 'react-redux';
import { useThemeIconStyles } from './ThemeIcon.styles';

export const ThemeIcon = ({ onClick }) => {
  const currentTheme = useSelector((state) => state.theme);
  const classes = useThemeIconStyles();

  return currentTheme === 'dark' ? (
    <svg onClick={onClick} className={classes.themeIcon}>
      <use href="#night" />
    </svg>
  ) : (
    <svg onClick={onClick} className={classes.themeIcon}>
      <use href="#light-theme" />
    </svg>
  );
};
