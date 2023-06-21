import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { Account, Logo, Menu, ThemeIcon } from '../Icons';
import { SignOut } from '../SignOutModal/SignOut';

import { PATH } from '../../Constants/paths';

import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../store/slices/theme.slice';
import { useHeaderStyles } from './Header.styles';

export const Header = () => {
  // const navigate = useNavigate(); //for button element
  const signOutRef = useRef(null);
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme);
  const theme = currentTheme === 'dark' ? 'light' : 'dark';

  const switchTheme = () => {
    dispatch(setTheme(theme));
  };

  const classes = useHeaderStyles();

  return (
    <header className={classes.header}>
      <Link to={PATH.index}>
        <Logo />
      </Link>
      <div className={classes.container}>
        <div className={classes.text}>
          <p className={classes.textTitle}>Stays</p>
          <p className={classes.textTitle}>Attractions</p>
        </div>

        <div className={classes.images}>
          <Menu />
          <ThemeIcon onClick={switchTheme} />
          <Account onClick={() => signOutRef.current.open()} />
          {/* <Account onClick={() => navigate(PATH.login)}/>  for button element */}
        </div>
      </div>
      <SignOut ref={signOutRef} />
    </header>
  );
};
