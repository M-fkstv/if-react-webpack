import React, { forwardRef } from 'react';

import { HotelCard } from '../HotelCard';
import { Slider } from '../Slider';
import { SliderButton } from '../SliderButton';

import { useSelector } from 'react-redux';

import { useHomesStyles } from '../Homes/homes.styles';
import { useSliderStyles } from '../Slider/slider.styles';
import { useTheme } from 'react-jss';

export const AvailableHotels = forwardRef((_, ref) => {
  const theme = useTheme();
  const classes = useHomesStyles(theme);
  const sliderClasses = useSliderStyles();

  const availableHotels = useSelector((state) => state.availableHotels);

  const available = Object.values(availableHotels.mutations)[0]?.data;

  if (available.length === 0) {
    return (
      <section className={classes.homes} ref={ref}>
        <h2 className={classes.sectionTitle}>
          Available hotels
          <p>Error...</p>
        </h2>
      </section>
    );
  }
  if (available.length < 4) {
    return (
      <section className={classes.homes} ref={ref}>
        <h2 className={classes.sectionTitle}>Available hotels</h2>

        <div className={classes.examples}>
          {available.map((item) => (
            <HotelCard {...item} key={item.id} />
          ))}
        </div>
      </section>
    );
  }
  return (
    <section className={classes.homes} ref={ref}>
      <h2 className={classes.sectionTitle}>Available hotels</h2>

      <div className={sliderClasses.wrapper}>
        <SliderButton className={sliderClasses.buttonPrev} id={'prevEl'} />
        <SliderButton className={sliderClasses.buttonNext} id={'nextEl'} />
        <Slider className={classes.examples} data={available} />
      </div>
    </section>
  );
});
