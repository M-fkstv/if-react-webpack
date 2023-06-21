import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Account.css';

export const Account = ({ onClick }) => {
  const location = useLocation();

  return (
    <svg
      onClick={onClick}
      className={
        location.pathname === '/login'
          ? 'header__images--account--login'
          : 'header__images--account'
      }
    >
      <use href="#account" />
    </svg>
  );
};

Account.propTypes = {
  onClick: PropTypes.func,
};
