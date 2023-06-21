import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { useSelector } from 'react-redux';

import '../UsersFilter/UsersFilter.css';
import { useUsersFilterStyles } from '../UsersFilter/UsersFilter.styles';

export const Counter = ({ name, setCount, maxValue, minValue, count }) => {
  // const childrenAge = useSelector((state) => state.childrenAge);
  // const children = useSelector((state) => state.children);
  const stateCount = useSelector((state) => state[`${name}`]);

  const classes = useUsersFilterStyles();
  // const dispatch = useDispatch();

  const btnAdd = classNames({
    btn: true,
    'btn--disabled':
      (name.includes('adult') && stateCount >= 30) ||
      (name.includes('rooms') && stateCount >= 30) ||
      (name.includes('children') && stateCount >= 10),
  });
  const btnRemove = classNames({
    btn: true,
    'btn--disabled':
      (name.includes('adult') && stateCount === 1) ||
      (name.includes('rooms') && stateCount === 1) ||
      (name.includes('children') && stateCount === 0),
  });

  const add = (e) => {
    e.preventDefault();
    setCount(stateCount + 1);
    // if (e.target.name === 'adults' && stateCount <= 30) {
    //   dispatch1(setAdults(stateCount + 1));
    // }

    // if (e.target.name === 'rooms' && stateCount <= 30) {
    //   dispatch1(setRooms(stateCount + 1));
    // }

    // if (e.target.name === 'children' && stateCount < 10) {
    //   setSelect((select) => {
    //     return [...select, stateCount];
    //   });
    //   dispatch1(setChildren(stateCount + 1));
    // }
  };

  const remove = (e) => {
    e.preventDefault();
    setCount(stateCount - 1);
    // if (children > childrenAge.length) {
    //   console.log(childrenAge.splice(0, childrenAge.length - 1));
    // }
    // if (e.target.name === 'adults' && stateCount > 1) {
    //   dispatch1(setAdults(stateCount - 1));
    // }

    // if (e.target.name === 'rooms' && stateCount > 1) {
    //   dispatch1(setRooms(stateCount - 1));
    // }

    // if (e.target.name === 'children' && stateCount > 0) {
    //   select.pop();

    //   setSelect((select) => {
    //     return [...select];
    //   });

    // dispatch(removeAge([...childrenAge].splice(childrenAge.length - 1)));
    //   dispatch1(setChildren(stateCount - 1));
    // }
  };

  return (
    <>
      <div className={classes.counter}>
        <button name={name} className={btnRemove} disabled={count === minValue} onClick={remove}>
          -
        </button>
        <span className={classes.output}>{count}</span>
        <button name={name} className={btnAdd} disabled={count === maxValue} onClick={add}>
          +
        </button>
      </div>
    </>
  );
};

Counter.propTypes = {
  name: PropTypes.string.isRequired,
  setCount: PropTypes.func.isRequired,
  maxValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};
