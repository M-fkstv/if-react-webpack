import React from 'react';
import Proptypes from 'prop-types';

export const SliderButton = ({ className, id }) => <div className={className} id={id}></div>;

SliderButton.propTypes = {
  className: Proptypes.string,
};
