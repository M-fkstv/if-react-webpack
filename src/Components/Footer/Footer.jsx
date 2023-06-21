import React from 'react';

import { useFooterStyles } from './Footer.styles';

export const Footer = () => {
  const classes = useFooterStyles();

  return (
    <div className={classes.wrapper}>
      <footer className={classes.footer}>
        {/* col-lg-12  */}
        <svg className={classes.logo}>
          {/* col-xs-2 */}
          <use href="./src/images/sprite.svg#mobile-footer-logo" />
        </svg>
        <div className={classes.description}>
          <div className={classes.column}>
            {/* col-md-3 */}
            <ul className={classes.columnText}>
              About
              <li className={classes.columnText}>How Triphouse works</li>
              <li className={classes.columnText}>Careers</li>
              <li className={classes.columnText}>Privacy</li>
              <li className={classes.columnText}>Terms</li>
            </ul>
          </div>
          <div className={classes.column}>
            <ul className={classes.columnText}>
              Property types
              <li className={classes.columnText}>Guest houses</li>
              <li className={classes.columnText}>Hotels</li>
              <li className={classes.columnText}>Apartments</li>
              <li className={classes.columnText}>Villas</li>
              <li className={classes.columnText}>Holiday homes</li>
              <li className={classes.columnText}>Hostels</li>
            </ul>
          </div>
          <div className={classes.column}>
            <ul className={classes.columnText}>
              Support
              <li className={classes.columnText}>Contact Customer Service</li>
              <li className={classes.columnText}>FAQ</li>
            </ul>
          </div>
        </div>
        <p className={classes.colontitul}>
          © 2020 Triphouse, Inc. All rights reserved
          {/* <button className="stt"></button> */}
          {/* TODO: ADD ScrollToTop Button */}
        </p>
      </footer>
    </div>
  );
};
