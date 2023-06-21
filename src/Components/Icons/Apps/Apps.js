import React from 'react';
import PropTypes from 'prop-types';

import './Apps.css';

export const Apps = ({ className, id }) => (
  <svg className={className}>
    <use href={id} />
  </svg>
);

Apps.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};
