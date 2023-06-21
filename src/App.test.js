import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './Components/App/App';

test('h2 test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Homes guests loves/);
  expect(linkElement).toBeInTheDocument();
});
