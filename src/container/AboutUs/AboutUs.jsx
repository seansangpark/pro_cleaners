import React from 'react';

import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div
    className='app__aboutus app__bg flex__center section__padding'
    id='about'
  >
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <p className='p__opensans'>
          Hey there, welcome to Pro Cleaners Pineville! We're all about giving
          your wardrobe a boost with our top-notch clothing care and
          alterations. Think of us as your go-to spot in Pineville for getting
          your clothes back in tip-top shape. From restoring to cleaning and
          altering, we've got the skills to make your outfits shine with
          confidence!
        </p>
      </div>

      <div className='app__aboutus-content_clothes flex__center'>
        <img
          src={images.clothes}
          alt='about_clothes'
        />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <p className='p__opensans'>
          Back in 2015, Pro Cleaners kicked off its journey as Pineville's
          favorite clothing care stop. Starting small as your local dry cleaner,
          we've blossomed into the go-to place for awesome craftsmanship and
          those nitty-gritty clothing details. Our story is packed with happy
          customers who've experienced the Pro Cleaners magic.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
