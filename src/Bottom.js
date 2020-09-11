import React from 'react';
import bottom from "./assets/bottom.jpg"
const Bottom = () => {
  return (
    <div className="bottom">
      <h2>Contact</h2>
      {/* <img className="bottom-img" src={bottom} /> */}
     <form >
     <h2>Name</h2>
       <input type="text" name="name" />
       <h2>Email</h2>
       <input type="email" name="email" />
       <textarea name="textarea" />
       <button type="submit">Send</button>
     </form>
    </div>
  );
}

export default Bottom;
