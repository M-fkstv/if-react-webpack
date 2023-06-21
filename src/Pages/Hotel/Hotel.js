import React from 'react';
import { useLocation } from 'react-router-dom';

import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';
import { Apps } from '../../Components/Icons';

import { useHomesStyles } from '../../Components/Homes/homes.styles';
import './Hotel.css';

export const Hotel = () => {
  const { state } = useLocation();
  const classes = useHomesStyles();

  return (
    <>
      <div className="header__wrapper">
        <Header />
        <div className={classes.examplesIcons}>
          <img
            className={classes.examplesIcon}
            id={state.id}
            src={state.imageUrl}
            alt={state.name}
          />

          <div className={classes.description}>
            <p className={classes.descriptionText}>{state.name}</p>
            <p className={classes.descriptionText}>
              {state.city}, {state.country}
            </p>
          </div>
        </div>

        <div className="apps">
          <Apps className="apps__google" id="#google" />
          <Apps className="apps__apple" id="#apple" />
        </div>
      </div>
      <Footer />
    </>
  );
};
