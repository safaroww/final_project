import React from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import BedIcon from '@mui/icons-material/Bed';
import './Header.scss';
import Logo from '../Logo/Logo.svg';
import Logo2 from '../Logo/Logo-White.svg';
import Pfp from '../MediaTemp/Ellipse 1.png';
import CheckIco from '../MediaTemp/Vector.svg';
import FavoriteIcon from '@mui/icons-material/Favorite';
export const Header = () => {
  return <>
    <div className="header">
      <div className="header__wrapper">
        <div className="header__nav white">
          <a href='/#' className="nav__item">
            <FlightIcon />
            <p className='second-font font-semibold white'>Find Flight</p>
          </a>
          <a href='/#' className="nav__item nav__active">
            <BedIcon />
            <p className='second-font font-semibold'>Find Stays</p>
          </a>
        </div>
        <div className="header__logo">
          <img className='logo logo__normal' src={Logo} alt="Logo" />
          <img className='logo logo__transparent' src={Logo2} alt="Logo" />
        </div>
        <div className="header__acc unlogged">
          <a href="/#" className='btn__light second-font font-semibold'>Login</a>
          <a className='btn__dark second-font font-semibold' href="/#">Sign up</a>
        </div>
        <div className="header__acc logged white">
          <a href='/#' className="favorite__link btn__light">
            <FavoriteIcon/>
            <p className='second-font font-semibold'>Favourites</p>

          </a>
          <div className="divider"></div>

          <a className='header__profile__link' href="/#">
            <div className="header__profile__img">
              <img src={Pfp} className='header__pfp' alt="" />
              <img src={CheckIco} className='check__icon' alt="" />
            </div>
            <p className="header__profile__name second-font font-semibold font-14">Jhon D.</p>
          </a>
        </div>
      </div>
    </div>
  </>;
};
