import React from 'react';
import './NineGrid.scss';
import { Grid } from './grid/Grid';
import istanbul from '../../assets/istanbul.png';
import baku from '../../assets/baku.png';
import dubai from '../../assets/dubai.png';
import paris from '../../assets/paris.png';
import london from '../../assets/london.png';
import male from '../../assets/male.png';
import sydney from '../../assets/sydney.png';
import newyork from '../../assets/newyork.png';
import tokyo from '../../assets/tokyo.png';

export const NineGrid = () => {
  const photos = [
    {
      img: baku,
      location: 'Baku, Azerbaijan',
    },

    {
      img: istanbul,
      location: 'Istanbul, Turkey',
    },
    {
      img: sydney,
      location: 'Sydney, Australia',
    },
    {
      img: paris,
      location: 'Paris, France',
    },
    {
      img: newyork,
      location: 'New York, US',
    },
    {
      img: dubai,
      location: 'Dubai, UAE',
    },
    {
      img: london,
      location: 'London, UK',
    },
    {
      img: tokyo,
      location: 'Tokyo, Japan',
    },
    {
      img: male,
      location: 'Malé, Maldives',
    },
  ];

  return (
    <>
      <div className="up">
        <div className="texts_grid">
          <div className="frst_txt">Plan your perfect trip</div>
          <div className="second_txt">Search Flights & Places Hire to our most popular destinations</div>
        </div>

        <button className="button3">
          <span className="promo">See more places</span>
        </button>
      </div>

      <div className="down">
        {photos.map((item) => (
          <Grid key={`input-${item.location}`} img={item.img} location={item.location} />
        ))}
      </div>
    </>
  );
};
