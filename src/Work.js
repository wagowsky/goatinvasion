import React from 'react';
import logofantasyillustration from './assets/logofantasyillustration.png';
import logofotogalery from './assets/logofotogalery.png';
import logonarnia from './assets/logonarnia.png';
import logovalhalla from './assets/logovalhalla.png';

const Work = () => {
  return (
    <div className='work'>

    <h1>WORK</h1>
    <img className='logo' src={logovalhalla} alt='logovalhalla' />
    
      <h2>More</h2> 
      <img className='logo' src={logonarnia} alt='logonarnia' />
      <h2>More</h2>
     
      <img className='logo' src={logofotogalery} alt='logofotogalery' />
      <h2>More</h2>
      <img
        className='logo'
        src={logofantasyillustration}
        alt='logofantasyillustration'
      />
      <h2>More</h2>
    </div>
  );
};

export default Work;
