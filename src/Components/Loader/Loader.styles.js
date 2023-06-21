import { createUseStyles } from 'react-jss';

export const useLoaderStyles = createUseStyles({
  loader: {
    display: 'inline-block',
    justifyContent: 'center',
    boxSizing: 'border-box',
    width: 125,
    height: 125,
    margin: {
      left: '50%',
      top: 40,
    },
    borderRadius: '50%',
    borderTop: '3px solid #a41111',
    borderRight: '3px solid transparent',
    animation: '$rotation 1s linear infinite',
  },

  '@keyframes rotation': {
    '0% ': {
      transform: 'rotate(0deg)',
    },
    '100% ': {
      transform: 'rotate(360deg)',
    },
  },
});
