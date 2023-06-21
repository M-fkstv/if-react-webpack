import { createUseStyles } from 'react-jss';
import { animationColor, generalWhite } from '../../index.styles';

export const useHeaderStyles = createUseStyles({
  header: {
    display: 'flex',
    height: 46,
    maxWidth: 1232,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto 150px',
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 340,
    alignItems: 'center',
  },

  text: {
    display: 'flex',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textTitle: {
    position: 'relative',
    font: {
      family: 'Roboto, sans-serif',
      weight: 400,
      size: 24,
    },
    color: `${generalWhite}`,
    alignSelf: 'center',

    '&:hover&:before': {
      content: '""',
      position: 'absolute',
      borderBottom: `5px solid ${animationColor}`,
      width: '90%',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%) translateY(100%)',
      animation: '$lined 100ms linear',
    },
  },

  '@keyframes lined': {
    from: {
      transform: 'translateX(-50%) translateY(0%)',
    },
    to: {
      transform: 'translateX(-50%) translateY(100%)',
    },
  },

  images: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 94,
  },
});
