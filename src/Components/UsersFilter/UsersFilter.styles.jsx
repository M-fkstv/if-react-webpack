import { createUseStyles } from 'react-jss';
import { generalBlue } from '../../index.styles';

export const useUsersFilterStyles = createUseStyles({
  persons: {
    display: 'none',
    zIndex: 2,
  },

  personsActive: {
    display: 'block',
  },

  inputs: {
    marginTop: 10,
    width: 260,
    borderRadius: 8,
    padding: '24px 24px 16px',
    backgroundColor: '#ffffff',
    boxShadow: '2px 2px 10px 0.2px #808080ff',
    position: 'absolute',
    top: '100%',
    left: '60%',
    // composes:'$active',
  },

  // active: {
  //   display: 'block',
  // },

  adultsInput: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  childrenInput: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  roomsInput: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  counter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    height: 30,
    width: 30,
    color: `${generalBlue}`,
    border: `1px solid ${generalBlue}`,
    backgroundColor: '#ffffff',
    fontSize: 20,
  },

  btnDisabled: {
    color: 'rgb(171, 137, 137)',
    border: '1px solid #808080ff',
    // backgroundColor: '#ffffff',
    opacity: 0.5,
  },

  output: {
    display: 'block',
    textAlign: 'center',
    width: 40,
    margin: 4,
  },

  childrenAge: {
    display: 'block',
    border: `1px solid ${generalBlue}`,
    height: 20,
    marginBottom: 10,
    marginLeft: -4,
    width: 100,
    fontSize: 12,
  },

  childrenInputSubtitle: {
    margiTop: 20,
    marginBottom: 12,
    fontSize: 12,
    fontWeight: 500,
    width: 200,
  },

  toggle: {
    display: 'flex',
  },
});
