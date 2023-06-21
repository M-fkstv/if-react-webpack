import { createUseStyles } from 'react-jss';
import { generalBlue, generalWhite } from '../../index.styles';

export const buttonStyles = (theme) => ({
  submit: {
    display: 'block',
    backgroundColor: theme.palette.primary.mainBtn,
    width: '16%',
    color: theme.palette.primary.mainText,
    border: 0,
    borderRadius: 8,
    fontSize: 24,
    height: 64,
    margin: -3,
    cursor: 'pointer',
    transition: '0.1s',
    '&:active': {
      scale: 0.98,
      backgroundColor: '#0f509a',
    },
  },

  logInSubmit: {
    color: `${generalWhite}`,
    backgroundColor: `${generalBlue}`,
    border: 0,
    borderRadius: 8,
    font: {
      size: 24,
      weight: 500,
    },
    width: '100%',
    height: 48,
    marginTop: 6,
    cursor: 'pointer',
    transition: '0.1s',

    '&:active': {
      scale: 0.98,
      backgroundColor: '#0f509a',
    },
  },
});

export const useButtonStyles = createUseStyles(buttonStyles);
