import { createUseStyles } from 'react-jss';
import { generalWhite } from '../../index.styles';

export const useSearchStyles = createUseStyles({
  magnifier: {
    display: 'none',
    height: 16,
    width: 16,
  },

  city: {
    position: 'relative',
    display: 'flex',
    width: '37.85%',
  },

  citySearch: {
    position: 'relative',
    width: '99%',
    paddingLeft: 8,
    // paddingRight:8,
    fontSize: 18,
    backgroundColor: `${generalWhite}`,
    composes: '$inputStyle',

    // '&:focus-visible': {
    //   // border: `3px solid ${animationColor}`,
    //   outline:`${animationColor} solid 3px`,
    // },
  },

  inputStyle: {
    border: 0,
    borderRadius: 8,
    fontWeight: 400,
    height: 59,
  },

  cityLabel: {
    position: 'absolute',
    top: -50,
    left: 20,
    composes: '$label',
  },

  label: {
    fontSize: 18,
    color: `${generalWhite}`,
  },
});
