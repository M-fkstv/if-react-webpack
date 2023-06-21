import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Counter } from '../Counter/Counter';
import { SelectWrapper } from './Select';

import { setAdults } from '../../store/slices/adults.slice';
import { removeAge, setChildren } from '../../store/slices/childrens.slice';
import { setRooms } from '../../store/slices/rooms.slice';

import './UsersFilter.css';
import { useUsersFilterStyles } from './UsersFilter.styles';

export const UsersFilter = memo(({ active }) => {
  const classes = useUsersFilterStyles();
  const dispatch = useDispatch();

  const children = useSelector((state) => state.children),
    adults = useSelector((state) => state.adults),
    rooms = useSelector((state) => state.rooms),
    childrenAge = useSelector((state) => state.childrenAge);

  const handleSetAdults = (count) => {
    dispatch(setAdults(count));
  };

  const handleSetChildren = (count) => {
    // setSelect(count);
    dispatch(setChildren(count));

    if (count < childrenAge.length) {
      const newState = [...childrenAge];
      newState.pop();
      console.log(newState);
      dispatch(removeAge(newState));
    }
  };

  const handleSetRooms = (count) => {
    dispatch(setRooms(count));
  };

  return (
    <div className={active ? classes.personsActive : classes.persons}>
      <div className={classes.inputs}>
        <div className={classes.adultsInput}>
          <p>Adults</p>
          <Counter
            name={'adults'}
            maxValue={30}
            minValue={1}
            setCount={handleSetAdults}
            count={adults}
          />
        </div>
        <div className={classes.childrenInput}>
          <p>Children</p>
          <Counter
            name={'children'}
            maxValue={10}
            minValue={0}
            setCount={handleSetChildren}
            count={children}
          />
        </div>

        <div className={classes.roomsInput}>
          <p>Rooms</p>
          <Counter
            name={'rooms'}
            maxValue={30}
            minValue={1}
            setCount={handleSetRooms}
            count={rooms}
          />
        </div>
        {children > 0 && (
          <p className={classes.childrenInputSubtitle}>
            What is the age of the child you're travelling with
          </p>
        )}
        {children !== 0 && <SelectWrapper children={children} />}
      </div>
    </div>
  );
});

UsersFilter.propTypes = {
  active: PropTypes.bool,
};
