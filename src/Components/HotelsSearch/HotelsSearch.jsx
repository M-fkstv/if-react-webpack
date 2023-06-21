import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Apps } from '../Icons';

import { useSearchStyles } from './HotelsSearch.styles';

export const HotelsSearch = memo(({ onChange, value }) => {
  const classes = useSearchStyles();

  return (
    <div className={classes.city}>
      <label className={classes.cityLabel} htmlFor="search">
        Your destination or hotel name
      </label>
      <Apps className={classes.magnifier} id="#magnifier" />
      <input
        className={classes.citySearch}
        type="text"
        id="search"
        name="search"
        onChange={onChange}
        value={value}
      />
    </div>
  );
});

HotelsSearch.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
