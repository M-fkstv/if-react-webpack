import { createUseStyles } from 'react-jss';

export const generalBlue = '#3077c6',
  generalBlueActive = '#0f509a',
  bgColor = '#eaf0f9',
  animationColor = '#f5bd41',
  mainText = '#383838',
  generalWhite = '#ffffff',
  generalBlack = '#000000';

export const indexStyles = (theme) => ({
  '@import': 'url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap)',

  '@global': {
    body: {
      margin: 0,
      boxSizing: 'border-box',
    },

    html: {
      fontFamily: 'Roboto, sans-serif',
    },

    a: {
      textDecoration: 'none',
    },
  },

  sprite: {
    display: 'none',
  },

  colLg1: {
    width: 'calc(100% / 14)',
  },

  colLg2: {
    width: ' calc(100% / 14 * 2)',
  },
  colLg3: {
    width: 'calc(100% / 14 * 3)',
  },
  colLg4: {
    width: 'calc(100% / 14 * 4)',
  },
  colLg5: {
    width: 'calc(100% / 14 * 5)',
  },
  colLg6: {
    width: 'calc(100% / 14 * 6)',
  },
  colLg7: {
    width: '50%',
  },
  colLg8: {
    width: 'calc(100% / 14 * 8)',
  },
  colLg9: {
    width: 'calc(100% / 14 * 9)',
  },
  colLg10: {
    width: 'calc(100% / 14 * 10)',
  },
  colLg11: {
    width: 'calc(100% / 14 * 11)',
  },
  colLg12: {
    width: ' calc(100% / 14 * 12)',
  },
  colLg13: {
    width: 'calc(100% / 14 * 13)',
  },
  colLg14: {
    width: '100%',
  },
});

export const useIndexStyles = createUseStyles(indexStyles);
