import React from 'react';
import PropTypes from 'prop-types';
import { setChildrenAge, updateAge } from '../../store/slices/childrens.slice';

import { useDispatch, useSelector } from 'react-redux';

import { useUsersFilterStyles } from './UsersFilter.styles';

export const SelectWrapper = ({ children }) => {
  const classes = useUsersFilterStyles();
  const dispatch = useDispatch();
  const childrenAge = useSelector((state) => state.childrenAge);

  const setAge = (e) => {
    const matchKey = childrenAge.find(
      (stateItem) => Object.keys(stateItem).toString() === e.target.id,
    );

    const matchKeyAndValue = matchKey && matchKey[e.target.id] === e.target.value;

    if (!matchKey) {
      dispatch(setChildrenAge({ [e.target.id]: e.target.value }));
    }
    if (matchKey && !matchKeyAndValue) {
      const stateCopy = [...childrenAge];
      stateCopy.splice([e.target.id], 1, { [e.target.id]: e.target.value });
      dispatch(updateAge(stateCopy));
    }
  };

  return new Array(children).fill(children).map((item, index) => {
    return (
      <select className={classes.childrenAge} id={index} key={index} onChange={setAge}>
        {new Array(18).fill(0).map((item, index) => {
          return (
            <option key={index} value={index}>
              {index} years old
            </option>
          );
        })}
      </select>
    );
  });
};

SelectWrapper.propTypes = {
  children: PropTypes.number,
};
