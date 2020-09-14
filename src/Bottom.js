import React from 'react';
import bottom from "./assets/bottom.jpg"
const Bottom = () => {
  return (
    <div className="bottom">
      <h2 class="contact">Contact</h2>
      {/* <img className="bottom-img" src={bottom} /> */}
     <form >
     <h2>Name</h2>
       <input type="text" name="name" />
       <h2>Email</h2>
       <input type="email" name="email" />
       <h2>Message</h2>
       <textarea name="textarea" />
       <button type="submit"><h3>Send</h3></button>
     </form>
    </div>
  );
}

export default Bottom;
