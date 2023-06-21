import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ btnText, className }) => {
  return (
    <button type="submit" className={className}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string,
  className: PropTypes.string,
};
