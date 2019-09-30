import React from 'react';
import logo from './logo.svg';
import sunset from './images/logo.jpg';
import './App.scss';

function App() {
  return (
    <div className="container-init d-flex flex-column justify-content-center">
      <div className="text-center">
        <p>revista degusta</p>
        <hr />
      </div>
      <div className="text-center">
        <div className="text-center p-2">
          <a href="https://www.instagram.com/revistadegusta/">instagram</a>
        </div>
        <div className="text-center p-2">
          <a href="https://www.youtube.com/channel/UCcRxoPEtYdUO5LQmZj7wPow">youtube</a>
        </div>
        <div className="text-center p-2">
          <a href="mailto:contato@revistadegusta.com?subject=Contato com a revista degusta&body=Olá, gostaria de saber mais sobre a revista. Valeu!">contato@revistadegusta.com</a>
        </div>
      </div>
    </div>
  );
}

export default App;
