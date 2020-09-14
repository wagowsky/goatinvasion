import React from 'react';
import top from "./assets/top.jpg"
const Top = () => {
  return (
    <div className="top">
      <div className="black"></div>
    <img className="img" src={top} alt="top"/>
     {/* <div className="img"></div> */}
<div className="black-invert"></div>
    </div>
  );
}

export default Top;



