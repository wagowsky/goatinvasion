import React from 'react';

const Bottom = () => {
  return (
    <div className="bottom">
     <form >
       <input type="text" name="name" />
       <input type="email" name="email" />
       <textarea name="textarea" />
       <button type="submit">Send</button>
     </form>
    </div>
  );
}

export default Bottom;
