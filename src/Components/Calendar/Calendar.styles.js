import { createUseStyles } from 'react-jss';
import { animationColor } from '../../index.styles';

export const useCalendarStyles = createUseStyles({
  input: {
    border: 'none',
    width: '100%',
    height: 58,
    font: {
      size: 15,
      family: 'Roboto, sans-serif',
    },
    borderRadius: 8,
    '&:focus-visible': {
      outline: `3px solid ${animationColor}`,
    },

    reactDatepicker: {
      display: 'flex',

      '& input-container > input': {
        textAlign: 'center',
      },
    },
  },
});
