import React from 'react';
import logofantasyillustration from './assets/logofantasyillustration.png';
import logofotogalery from './assets/logofotogalery.png';
import logonarnia from './assets/logonarnia.png';
import logovalhalla from './assets/logovalhalla.png';

const Work = () => {
  return (
    <div className='work'>
      <h1>WORK</h1>
      <div className='logos'>
        <div className='project'>
          <img className='logo' src={logovalhalla} alt='logovalhalla' />

          <h2>More</h2>
        </div>
        <div className='project'>
          <img className='logo' src={logonarnia} alt='logonarnia' />
          <h2>More</h2>
        </div>
        <div className='project'>
          <img className='logo' src={logofotogalery} alt='logofotogalery' />
          <h2>More</h2>
        </div>
        <div className='project'>
          <div className="logoContainer">
          <img className='logo' src={logofantasyillustration}alt='logofantasyillustration'/>
            </div>
            <div className="more">

          <h2>More</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
