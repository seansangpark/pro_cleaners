import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div
    className='app__bg app__wrapper section__padding'
    id='contact'
  >
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1
        className='headtext__cormorant'
        style={{ marginBottom: '3rem' }}
      >
        Find Us
      </h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>
          12744 Lancaster Hwy C, Pineville, North Carolina 28134
        </p>
        <p
          className='p__cormorant'
          style={{ color: '#DCCA87', margin: '2rem 0' }}
        >
          Opening Hours
        </p>
        <p className='p__opensans'>Mon - Fri: 8:00 aM - 6:30 pM</p>
        <p className='p__opensans'>Saturday: 9:00 aM - 3:00 pM</p>
        <p className='p__opensans'>Sunday: Closed</p>
      </div>
      <button
        type='button'
        className='custom__button'
        style={{ marginTop: '2rem' }}
      >
        Visit Us
      </button>
    </div>

    <div className='app__wrapper_img'>
      <img
        src={images.pro2}
        alt='finus_img'
      />
    </div>
  </div>
);

export default FindUs;
