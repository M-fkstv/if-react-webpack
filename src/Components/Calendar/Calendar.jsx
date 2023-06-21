import React, { memo, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import './Calendar.css';
import { useDispatch } from 'react-redux';
import { setDateFrom, setDateTo } from '../../store/slices/date.slice';

export const Calendar = memo(() => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    dispatch(setDateFrom(start.toString()));
    end && dispatch(setDateTo(end.toString()));
  };

  return (
    <DatePicker
      placeholderText="Click to select a date"
      onChange={onChange}
      minDate={new Date()}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      monthsShown={2}
      dateFormat="d MMMM yyyy"
    />
  );
});
