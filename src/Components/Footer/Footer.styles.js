import { createUseStyles } from 'react-jss';
import { generalWhite } from '../../index.styles';

export const useFooterStyles = createUseStyles(
  {
    '@global': {
      li: {
        marginTop: 20,
      },
    },

    footer: {
      composes: '$colLg12',
      padding: {
        top: 120,
        bottom: 120,
      },
      maxWidth: 1232,
      margin: '0 auto',
    },

    wrapper: {
      backgroundColor: ' #10367c',
      margin: 'auto',
    },

    logo: {
      display: 'none',
    },

    description: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxWidth: 1232,
      margin: '0 auto 60px',
      gap: 16,
    },

    column: {
      width: '33.3%',
    },

    columnText: {
      color: `${generalWhite}`,
      lineHeight: 1.4,
      paddingLeft: 0,
      listStyle: 'none',
      font: {
        size: 20,
        weight: 400,
      },
    },

    colontitul: {
      font: {
        size: 14,
        weight: 400,
      },
      color: `${generalWhite}`,
    },

    colLg12: {
      width: ' calc(100% / 14 * 12)',
    },
  },
  { name: 'footer', index: 0 },
);
