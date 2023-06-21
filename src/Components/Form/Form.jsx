import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { HotelsSearch } from '../HotelsSearch';
import { UsersFilter } from '../UsersFilter';

import { useClickOutside } from '../../hooks/useClickOutSide';

import { useAvailableHotMutation } from '../../services/getAvailable';
import { setAvailableHotels } from '../../store/slices/available.slice';
import { clearAge, clearChildren } from '../../store/slices/childrens.slice';
import { clearRooms } from '../../store/slices/rooms.slice';
import { clearAdults } from '../../store/slices/adults.slice';

import './Form.styles.js';
import { useButtonStyles } from '../Button/Button.styles';
import { useFormStyles } from './Form.styles.js';
import { useTheme } from 'react-jss';

export const Form = () => {
  const theme = useTheme();
  const classes = useFormStyles();
  const btnClasses = useButtonStyles(theme);

  const [formState, setFormState] = useState('');
  const [filterActive, setFilterActive] = useState(false);
  const adults = useSelector((state) => state.adults),
    rooms = useSelector((state) => state.rooms),
    children = useSelector((state) => state.children),
    dateFrom = useSelector((state) => state.dateFrom),
    dateTo = useSelector((state) => state.dateTo);

  const dispatch = useDispatch();

  const [getAvailableHotels, { isLoading }] = useAvailableHotMutation({
    fixedCacheKey: 'shared-hotels',
  });

  const childrenAge = useSelector((state) => state.childrenAge).map((item, index) => {
    return Object.values(item);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formState !== '') {
      try {
        const availableHotels = await getAvailableHotels({
          formState,
          adults,
          rooms,
          childrenAge,
          dateFrom,
          dateTo,
        }).unwrap();
        dispatch(setAvailableHotels(availableHotels));
      } catch (error) {
        console.error();
      }
      setFormState('');
      dispatch(clearAge());
      dispatch(clearRooms());
      dispatch(clearAdults());
      dispatch(clearChildren());
    }
  };

  const handleChange = (e) => {
    setFormState(e.target.value);
  };

  const showFilter = () => {
    filterActive ? setFilterActive(false) : setFilterActive(true);
  };

  const outsideRef = useClickOutside(() => setFilterActive(false));

  return (
    <form id="form" className={classes.form} onSubmit={handleSubmit} ref={outsideRef}>
      <HotelsSearch onChange={handleChange} value={formState} />
      <div className={classes.dates}>
        <label className={classes.dateInLabel}>Check in - Check out</label>
        <Calendar />
      </div>
      <div className={classes.persons} onClick={showFilter}>
        <p>
          {adults} Adults - {children} Children - {rooms} Rooms
        </p>
      </div>
      <UsersFilter active={filterActive} />
      <Button btnText={'Submit'} className={btnClasses.submit} />{' '}
    </form>
  );
};
