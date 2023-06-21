import { createUseStyles } from 'react-jss';

export const logoStyles = () => ({
  logo: {
    display: 'block',
    height: 40,
    width: 205,
  },
});

export const useLogoStyles = createUseStyles(logoStyles);
