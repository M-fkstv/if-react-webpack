import React from 'react';

// import './Logo.css';
import { useLogoStyles } from './Logo.styles';

export const Logo = () => {
  const classes = useLogoStyles();

  return (
    <svg className={classes.logo}>
      <use href="#logo" />
    </svg>
  );
};
