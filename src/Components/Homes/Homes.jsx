import React, { useEffect, useState } from 'react';

import { BaseURL } from '../../services/Constanst/links';
import { getHotels } from '../../services/SearchApi/SearchAPI';
import { Slider } from '../Slider';
import { SliderButton } from '../SliderButton';

import { useTheme } from 'react-jss';
import { useSliderStyles } from '../Slider/slider.styles';
import { useHomesStyles } from './homes.styles';

export const Homes = () => {
  const theme = useTheme;
  const classes = useHomesStyles(theme);
  const [state, setState] = useState([]);
  const hasHomes = localStorage.getItem('homes');
  const sliderClasses = useSliderStyles();

  useEffect(() => {
    if (!hasHomes) {
      getHotels(BaseURL).then((result) => {
        setState(result);
        localStorage.setItem('homes', JSON.stringify(result));
      });
    } else {
      setState(JSON.parse(hasHomes));
    }
    //TODO: Error handling, loader
  }, [hasHomes]);

  return (
    <section className={classes.homes}>
      <h2 className={classes.sectionTitle}>Homes guests loves</h2>

      <div className={sliderClasses.wrapper}>
        <SliderButton className={sliderClasses.buttonPrev} id={'prevEl'} />
        <SliderButton className={sliderClasses.buttonNext} id={'nextEl'} />
        <Slider className={classes.examples} data={state} />
      </div>
    </section>
  );
};
