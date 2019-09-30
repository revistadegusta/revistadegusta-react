import React from 'react';
import logo from './logo.svg';
import sunset from './images/sunset.jpg';
import './App.scss';

function App() {
  return (
    <div className="container-init d-flex flex-column justify-content-center">
      <div className="align-self-center text-center">
        <p>revista degusta</p>
        <hr />
      </div>
      <div className="d-flex justify-content-center align-self-center text-center">
        <div className="align-self-center text-center p-2">
          <a href="https://www.instagram.com/revistadegusta/">instagram</a>
        </div>
        <div className="align-self-center text-center p-2">
          <a href="https://www.youtube.com/channel/UCcRxoPEtYdUO5LQmZj7wPow">youtube</a>
        </div>
      </div>
    </div>
  );
}

export default App;
