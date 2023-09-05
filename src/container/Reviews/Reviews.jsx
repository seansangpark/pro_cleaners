import React from 'react';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Reviews.css';

const Reviews = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Google Reviews' />
        <h1 className='headtext__cormorant'>From actual customers</h1>
        <p
          className='p__opensans'
          style={{ color: '#AAA', marginTop: '2rem' }}
        >
          Hear what our actual customers have to say about our services at Pro
          Cleaners. They can attest that we provide the best service in
          Pineville and Charlotte area!
        </p>
        <button
          type='button'
          className='custom__button'
        >
          View More
        </button>
      </div>
      <div className='app__gallery-images'>
        <div
          className='app__gallery-images_container'
          ref={scrollRef}
        >
          {data.customer_reviews.map((review, index) => (
            <div className='app__gallery-images_card'>
              <SubHeading title={review.author_detail} />
              <h1 className='headtext2__cormorant'>{review.author}</h1>
              <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
              <br />
              <p className='p__opensans'>{review.review}</p>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort
            className='gallery__arrow-icon'
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className='gallery__arrow-icon'
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;