import React from 'react';

import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div
    className='app__header app__wrapper section__padding'
    id='home'
  >
    <div className='app__wrapper_info'>
      <SubHeading title="Your Clothes' Best Friend" />
      <h1 className='app__header-h1'>Where Cleanliness Meets Craftsmanship</h1>
      <p
        className='p__opensans'
        style={{ margin: '2rem 0' }}
      >
        Welcome to Pro Cleaners in Pineville, North Carolina, where we turn your
        everyday clothes into works of art through our impeccable cleaning and
        alteration services.
      </p>
      {/* <button
        type='button'
        className='custom__button'
      >
        Explore Menu
      </button> */}
    </div>

    <div className='app__wrapper_img'>
      <img
        src={images.welcome}
        alt='header_img'
      />
    </div>
  </div>
);

export default Header;
