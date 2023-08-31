import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div
    className='app__specialMenu flex__center section__padding'
    id='menu'
  >
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits you palatte' />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Dry Cleaning</p>
        <div className='app__specialMenu_menu_items'>
          {data.dry_cleanings.map((item, index) => (
            <MenuItem
              key={item.title + index}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img
          src={images.menu}
          alt='menu img'
        />
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Repairs & Alterations</p>
        <div className='app__specialMenu_menu_items'>
          {data.repairs.map((item, index) => (
            <MenuItem
              key={item.title + index}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: '15px' }}>
      <button
        type='button'
        className='custom__button'
      >
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
