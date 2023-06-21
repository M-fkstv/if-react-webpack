import { createUseStyles } from 'react-jss';

export const themeIconStyles = () => ({
  themeIcon: {
    height: 30,
    width: 30,
    cursor: 'pointer',
  },
});

export const useThemeIconStyles = createUseStyles(themeIconStyles);
