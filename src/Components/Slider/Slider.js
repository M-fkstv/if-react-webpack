// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HotelCard } from '../HotelCard';
import { PATH } from '../../Constants/paths';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const Slider = ({ className, data }) => {
  return (
    <Swiper
      className={className}
      modules={[Navigation]}
      loop={true}
      spaceBetween={16}
      slidesPerView={4}
      breakpoints={{
        1320: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2,
        },
      }}
      navigation={{
        nextEl: '#nextEl',
        prevEl: '#prevEl',
        clickable: true,
        loop: true,
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {/* <Link to={PATH.hotels}>   validateDOMNesting(...): <a> cannot appear as a descendant of <a>. */}
          <HotelCard {...item} />
          {/* </Link> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
};
