import React from 'react';
import { Link } from 'react-router-dom';

import './Grid.scss';

interface GridProps {
  img: string;
  location: string;
}

export const Grid = (props: GridProps) => {
  return (
    <button className="box">
      <img src={props.img} alt="" />

      <div className="links">
        <div className="loc">{props.location}</div>

        <div className="tags">
          <Link to="/">Flights</Link>
          <div>.</div>
          <Link to="/">Hotels</Link>
          <div>.</div>
          <Link to="/">Resorts</Link>
        </div>
      </div>
    </button>
  );
};
