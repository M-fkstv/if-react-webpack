import { createUseStyles } from 'react-jss';

export const advStyles = (theme) => ({
  offer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingTop: 120,
    backgroundColor: theme.palette.secondary.backgroundColor,
  },

  advantages: {
    maxWidth: 1232,
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    margin: '0 auto 110px',
    composes: '$colLg12',
  },

  colLg12: {
    width: ' calc(100% / 14 * 12)',
  },

  icons: {
    textAlign: 'center',
  },

  iconsIcon: {
    // width:'100%',
    aspectRatio: '1/1',
    marginBottom: 42,
    width: 100,
  },

  description: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--main-text)',
  },
});

export const useAdvStyles = createUseStyles(advStyles);
