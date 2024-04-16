import React, { useState } from 'react';

function Home() {
  const [message, setMessage] = useState('Welcome to my website!');

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage('Thanks for visiting!')}>Click Me</button>
    </div>
  );
}

export default Home;
