import React from 'react';

import top from './assets/top.jpg';
import { Link } from 'react-scroll';

const Top = () => {
  return (
    <div className='top'>
      <div className='black'>
        <div className='menuContainer'>
          <Link to='work' smooth={true} duration={500} offset={-70}>
            <h2 className='menu menu1'>Work</h2>
          </Link>

          <Link to='contact' smooth={true} duration={500} offset={-70}>
         
        
          <h2 className='menu menu2'>Contact</h2>
          </Link>
        </div>
      </div>
      <img className='img' src={top} alt='top' />
    
      <div className='black-invert'></div>
    </div>
  );
};

export default Top;
