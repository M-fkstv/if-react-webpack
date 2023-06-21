import React from 'react';

import { useLoaderStyles } from './Loader.styles';

export const Loader = ({ children, loading }) => {
  const classes = useLoaderStyles();

  if (loading) {
    return <p className={classes.loader}></p>;
  }
  return children;
};
