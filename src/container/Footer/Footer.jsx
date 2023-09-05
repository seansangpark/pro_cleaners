import React from 'react';
import { images } from '../../constants';
import { PhoneNumberLink } from '../../components';
import './Footer.css';

const Footer = () => {
  const phoneNumber = '+1-704-941-1977';

  return (
    <div
      className='app__footer section__padding'
      id='login'
    >
      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>
            12744 Lancaster Hwy C, Pineville, NC 28134
          </p>
          <p className='p__opensans'>
            <PhoneNumberLink phoneNumber={phoneNumber} />
          </p>
        </div>

        <div className='app__footer-links_logo'>
          <img
            src={images.pro}
            alt='footer_logo'
          />
          <p className='p__opensans'>
            At Pro Cleaners, we understand that your clothes are an extension of
            yourself. Let us take care of them so you can shine, wrinkle-free.
          </p>
        </div>

        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>8:00 aM - 6:30 pM</p>
          <p className='p__opensans'>Saturday:</p>
          <p className='p__opensans'>9:00 aM- 3:00 pM</p>
        </div>
      </div>

      <div className='footer__copyright'>
        <p className='p__opensans'>
          Copyright © 2023 Spark Design. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
