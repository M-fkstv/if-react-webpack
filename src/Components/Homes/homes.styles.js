import { createUseStyles } from 'react-jss';
import { animationColor, generalBlue } from '../../index.styles';

export const homesStyles = (theme) => ({
  homes: {
    backgroundColor: theme.palette.primary.backgroundColor,
    paddingTop: 120,
    paddingBottom: 120,
  },

  '@keyframes width': {
    from: { width: 0 },
    to: { width: 100 },
  },

  sectionTitle: {
    position: 'relative',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 500,
    margin: '0 auto 106px',
    color: theme.palette.primary.sectionTitletext,

    '&:hover:before': {
      position: 'absolute',
      content: '""',
      width: 100,
      borderBottom: `7px solid ${animationColor}`,
      top: '140%',
      left: '50%',
      color: animationColor,
      transform: 'translateX(-50%)',
      animation: '$width 300ms ease-in-out',
    },
  },

  examples: {
    position: 'relative',
    maxWidth: 1232,
    gap: 16,
    display: 'flex',
    justifyContent: 'center',
    margin: '106px auto 0',
    flexWrap: 'wrap',
  },

  examplesIcons: {
    width: 296,
    margin: '0 auto',
    overflow: 'hidden',
  },

  examplesIcon: {
    width: '100%',
    aspectRatio: '1/1',
    transition: '0.5s',

    '&:hover': {
      scale: 1.1,
    },
  },

  description: {
    height: 120,
  },

  descriptionText: {
    marginTop: 20,
    fontFamily: 'Roboto, sans-serif',
    fontSize: 24,
    fontWeight: 400,
    color: generalBlue,

    '&:last-of-type': {
      color: '#bfbfbf',
    },
  },
});

export const useHomesStyles = createUseStyles(homesStyles);
