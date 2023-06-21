import React from 'react';

import { Sprite } from '../Sprite';
import { ScrollRestoration } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Layout } from '../Layout';

export const Wrapper = () => {
  return (
    <>
      <Sprite />
      <ScrollRestoration />
      <Provider store={store}>
        <Layout />
      </Provider>
    </>
  );
};
