import React from 'react';
import { Apps } from '../Icons';
import { config } from './advantages.config';

import { useTheme } from 'react-jss';
import { useIndexStyles } from '../../index.styles';
import { useHomesStyles } from '../Homes/homes.styles';
import { useAdvStyles } from './advantages.styles';

export const Advantages = () => {
  const theme = useTheme();
  const indexClasses = useIndexStyles(theme);
  const titleClasses = useHomesStyles(theme);
  const classes = useAdvStyles(theme);

  return (
    <section className={classes.offer}>
      <h2 className={titleClasses.sectionTitle}>What do we offer</h2>

      <div className={classes.advantages}>
        {config.map((item, index) => {
          return (
            <div className={indexClasses.colLg3} key={index}>
              <div className={classes.icons}>
                <Apps className={classes.iconsIcon} id={item.id} />
                <p className={classes.description}>{item.descr}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
