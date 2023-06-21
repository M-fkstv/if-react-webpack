import { createUseStyles } from 'react-jss';
import { animationColor, generalWhite } from '../../index.styles';

export const useFormStyles = createUseStyles({
  form: {
    display: 'flex',
    position: 'relative',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: 1230,
    height: 64,
    padding: 0,
    border: '3px solid #f3f3f4',
    borderRadius: 8,
    backgroundColor: `${generalWhite}`,
  },

  magnifier: {
    display: 'none',
    height: 16,
    width: 16,
  },

  formCity: {
    position: 'relative',
    display: 'flex',
    width: '37.85%',
    maxWidth: 1232,
    paddingLeft: 24,
  },

  inputStyle: {
    border: 0,
    borderRadius: 8,
    fontWeight: 400,
    fontSize: 18,
    height: 59,
  },

  dateInLabel: {
    position: 'absolute',
    top: -50,
    left: 25,
    fontSize: 18,
    color: `${generalWhite}`,

    // '&:after': { //* for example
    //   position: 'absolute',
    //   content: '""',
    //   height: 1,
    //   width: 10,
    //   borderBottom: `2px solid ${generalWhite}`,
    //   top: '50%',
    //   left: '100%',
    //   marginLeft: 10,
    // },
  },

  dates: {
    position: 'relative',
    width: '21.12%',
    height: 64,
    border: '3px solid #f3f3f4',
    borderRadius: 8,
    margin: -3,
  },

  persons: {
    display: 'flex',
    width: '26%',
    fontSize: 18,
    fontWeight: 400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 24,
    paddingLeft: 30,
    textAlign: 'center',
  },

  personsSearch: {
    width: '100%',
    textAlign: 'center',

    '&:checked': {
      border: `3px solid ${animationColor}`,
      outline: 0,
    },
  },
});
