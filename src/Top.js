import React from 'react';
import top from "./assets/mobile-top.jpg"
const Top = () => {
  return (
    <div className="top">
      <div className="black">
        <div className="menuContainer">

        <h2 className="menu menu1">Work</h2>
        <br/>
        <h2 className="menu menu2">Contact</h2>
        </div>
      </div>
    <img className="img" src={top} alt="top"/>
     {/* <div className="img"></div> */}
<div className="black-invert"></div>
    </div>
  );
}

export default Top;




