import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PATH } from '../../Constants/paths';

// import './HotelCard.css';
import { useHomesStyles } from '../Homes/homes.styles';

export const HotelCard = ({ id, name, city, country, imageUrl }) => {
  const classes = useHomesStyles();

  return (
    <div className={classes.examplesIcons}>
      <Link to={`${PATH.hotels}${id}`} state={{ id, name, city, country, imageUrl }}>
        <img className={classes.examplesIcon} id={id} src={imageUrl} alt={name} />

        <div className={classes.description}>
          <p className={classes.descriptionText}>{name}</p>
          <p className={classes.descriptionText}>
            {city}, {country}
          </p>
        </div>
      </Link>
    </div>
  );
};

HotelCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  imageUrl: PropTypes.string,
};
