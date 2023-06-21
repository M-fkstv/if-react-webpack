import React, { useId } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';

import { authStatuses } from '../../Constants/authStatuses';
import { PATH } from '../../Constants/paths';

import { setStatus } from '../../store/slices/auth.slice';
import { setUser } from '../../store/slices/user.slice';

import { useButtonStyles } from '../../Components/Button/Button.styles';
import './LogIn.css';
import { useLoginStyles } from './Login.styles';

export const LogIn = () => {
  const btnClasses = useButtonStyles();
  const classes = useLoginStyles();
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email && password !== '') {
      dispatch(setStatus(authStatuses.loggedIn));
      dispatch(setUser({ email, password }));
      navigate(PATH.index);
    }
  };

  return (
    <>
      <div className="log-in">
        <Header />
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <div className={classes.wrapper}>
            <label className={classes.label} htmlFor={emailId}>
              Email address
            </label>
            <input
              name="email"
              className={classes.input}
              id={emailId}
              type="text"
              autoComplete="off"
            />
          </div>
          <div className={classes.wrapper}>
            <label className={classes.label} htmlFor={passwordId}>
              Password
            </label>
            <input name="password" className={classes.input} id={passwordId} type="password" />
          </div>

          <Button btnText="Sign in" className={btnClasses.logInSubmit} type="submit" />
        </form>
      </div>
    </>
  );
};
