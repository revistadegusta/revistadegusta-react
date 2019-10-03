import React from 'react';
import logo from './logo.svg';
import sunset from './images/logo.jpg';
import cover_winter_2019 from './images/covers/2019-inverno.jpg';
import './App.scss';
import './styles/_reboot-yumpu.scss';

function App() {
  return (
    <div>
      <div className="container-init d-flex flex-column justify-content-center">

        <div className="row no-gutters p-3">
          <div className="col-sm-3 p-3">
            <img src={cover_winter_2019} alt="capa da primeira edição da revista degusta - inverno de 2019" className="img-fluid" />
          </div>
          <div className="col-sm-6 p-3">
            <h6 className="text-muted">Edição #1 | Inverno de 2019</h6>
            <h1>Revista Degusta</h1>
            <p className="text-muted">Gastronomia e Culinária Regional</p>
            <hr />
            <a href="" className="btn btn-outline-light mr-3">Baixar o PDF</a>
            <a href="" className="btn btn-outline-light">Ler online</a>

          </div>
          <div className="col-sm-3 p-3">
            <div class="shadow-sm p-3 bg-gradient-light rounded">
              <p>siga a gente</p>
              <hr />
              <p>instagram</p>
              <p>youtube</p>
              <p>facebook</p>
              <p>twitter</p>
            </div>
          </div>

        </div>
        <div className="row no-gutters pt-0 pr-3 pb-3 pl-3">
          <div className="col-sm-3 pt-0 pr-3 pb-3 pl-3">
            <div class="shadow-sm p-3 mb-3 bg-gradient-dark rounded">
              assine nossa newsletter
            </div>
          </div>
          <div className="col-sm-3 pt-0 pr-3 pb-3 pl-3">
            <div class="shadow-sm p-3 mb-3 bg-gradient-success rounded">
              conheça nossos planos para anunciar
            </div>
          </div>
          <div className="col-sm-3 pt-0 pr-3 pb-3 pl-3">
            <div class="shadow-sm p-3 mb-3 bg-gradient-dark rounded">
              entre em contato
            </div>
          </div>
          <div className="col-sm-3 pt-0 pr-3 pb-3 pl-3">
            <div class="shadow-sm p-3 mb-5 bg-gradient-dark rounded">
              edições anteriores
            </div>
          </div>
        </div>

        <div className='embed-container' data-page-width='500' data-page-height='625' classID='ypembedcontainer' >
          <iframe src="https://www.yumpu.com/pt/embed/view/v0FeNwLKC6oXbDJp" frameborder="0" allowfullscreen="true"  allowtransparency="true"></iframe>
        </div>

      </div>
    </div>
  );
}

export default App;
