import React from 'react';

import { Header } from '../Header';
import { Form } from '../Form';
import { Apps } from '../Icons';
import { useTopSectionStyles } from './TopSection.styles';

import './TopSection.css';
import { useTheme } from 'react-jss';

export const TopSection = () => {
  const theme = useTheme();
  const classes = useTopSectionStyles(theme);

  return (
    <>
      <div className="main__wrapper">
        <div className={classes.main}>
          <Header />
          <h1 className={classes.titleText}>
            Discover stays <br />
            to live, work or just relax
          </h1>
          <Form />
        </div>
        <div className={classes.apps}>
          <Apps className="apps__google" id="#google" />
          <Apps className="apps__apple" id="#apple" />
        </div>
      </div>
    </>
  );
};
