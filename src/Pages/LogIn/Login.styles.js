import { createUseStyles } from 'react-jss';
import { generalWhite } from '../../index.styles';

export const loginStyles = () => ({
  '@global': {
    body: {
      margin: 0,
      boxSizing: 'border-box',
    },

    h1: {
      font: {
        size: 24,
        weight: 700,
      },
      marginBottom: 40,
    },
  },

  background: {
    backgroundImage: 'url("../../Components/Icons/castelmezzano-1979546 1.svg")',
    backgroundSize: 'cover',
    height: 900,
    minHeight: '100vh',
    paddingTop: 50,
  },

  form: {
    width: 400,
    height: 360,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '34px 40px',
    backgroundColor: `${generalWhite}`,
    margin: '170px auto',
  },

  wrapper: {
    width: '100%',
    margin: '0 auto 10px',
  },

  label: {
    fontWeight: 400,
  },

  input: {
    width: '100%',
    height: 40,
    margin: {
      top: 8,
      bottom: 8,
    },
    border: '2px solid gray',
  },
});

export const useLoginStyles = createUseStyles(loginStyles);
