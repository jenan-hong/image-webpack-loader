import React from 'react';
import img1 from '../public/img/daniil-silantev-9XoCSVIWHvU-unsplash.jpg';
import img2 from '../public/img/duong-ngan-r7uz4y9y-Og-unsplash.jpg';

function App() {
  return (
    <div>
      <h2>
        <b>Welcome to my React App!</b>
      </h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <img src={img1} width={640} height={960} />
      <img src={img2} width={640} height={960} />
    </div>
  );
}

export default App;