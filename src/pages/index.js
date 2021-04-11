import React from 'react';
import avimage from './background.jpg'
  
const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh',
      }}
    >
      <img src={avimage} alt="some" />
    </div>
  );
};


  
export default Home;