import React from 'react';

const Bottom = () => {
  return (
    <div className="bottom">
      <h2 className="contact">Contact</h2>
     <form >
     <h2 >Name</h2>
       <input type="text" name="name" />
       <h2>Email</h2>
       <input type="email" name="email" />
       <h2>Message</h2>
       <textarea name="textarea" />
       <button type="submit">Send</button>
     </form>
    </div>
  );
}

export default Bottom;
