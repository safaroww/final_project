import './Footer.scss';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import Mailbox from './Mailbox.png';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../Logo/Logo (1).svg';

export const Footer = () => {
  return (
    <div className="footer-section">
      <div className="box">
        <div className="section">
          <h2 className="sub">Subscribe Newsletter</h2>
          <div className="input-form">
            <h5 className="travel-text">The Travel</h5>
            <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
            <input type="email" placeholder="Your email address" id="email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
        <div className="mail-box">
          <img src={Mailbox} alt="mailbox" />
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
            <div className="icons">
              <FacebookRoundedIcon />
              <TwitterIcon />
              <YouTubeIcon />
              <InstagramIcon />
            </div>
          </div>
          <div className="text">
            <h3>Our Destinations</h3>
            <p>Canada</p>
            <p>Alaska</p>
            <p>France</p>
            <p>Iceland</p>
          </div>
          <div className="text">
            <h3>Our Activities</h3>
            <p>Northern Lights</p>
            <p>Cruising & sailing</p>
            <p>Multi-activities</p>
            <p>Kayaing</p>
          </div>
          <div className="text">
            <h3>Travel Blogs</h3>
            <p>Bali Travel Guide</p>
            <p>Sri Lanks Travel Guide</p>
            <p>Peru Travel Guide</p>
            <p>Bali Travel Guide</p>
          </div>
          <div className="text">
            <h3>About Us</h3>
            <p>Our story</p>
            <p>Work with us</p>
          </div>
          <div className="text">
            <h3>Contact us</h3>
            <p>Our story</p>
            <p>Work with us</p>
          </div>
        </div>
      </div>
    </div>
  );
};
