import React from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import BedIcon from '@mui/icons-material/Bed';
import './Header.scss';
import Logo from '../Logo/Logo.svg';
export const Header = () => {
  return <>
    <div className="header">
      <div className="header__wrapper">
        <div className="header__nav">
          <a href='/#' className="nav__item">
            <FlightIcon />
            <p className='second-font font-semibold'>Find Flight</p>
          </a>
          <a href='/#' className="nav__item nav__active">
            <BedIcon />
            <p className='second-font font-semibold'>Find Stays</p>
          </a>
        </div>
        <div className="header__logo">
          <img className='logo' src={Logo} alt="Logo" />
        </div>
        <div className="header__acc">
          <a href="/#" className='btn__light second-font font-semibold'>Login</a>
          <a className='btn__dark second-font font-semibold' href="/#">Sign up</a>
        </div>
      </div>
    </div>
  </>;
};
