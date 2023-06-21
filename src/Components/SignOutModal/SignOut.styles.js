import { createUseStyles } from 'react-jss';
import { generalWhite } from '../../index.styles';

export const signOutStyles = () => ({
  wrapper: {
    position: 'fixed',
    height: '100vh',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    left: 0,
    zIndex: 1,
  },

  modal: {
    position: 'fixed',
    top: 120,
    left: 1180,
    height: 50,
    width: 190,
    cursor: 'pointer',
    opacity: 1,
    backgroundColor: `${generalWhite}`,
  },

  content: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 40,
    height: '100%',
    fontSize: 20,
  },

  signOut: {
    height: 18,
    width: 20,
  },
});

export const useSignOutStyles = createUseStyles(signOutStyles);
