import React from 'react';
import logo from './logo.svg';
import sunset from './images/logo.jpg';
import cover_winter_2019 from './images/covers/2019-inverno.jpg';
import cover_carnaval_2019 from './images/covers/2019-tiragosto-carnaval.jpg';
import cover_pascoa_2019 from './images/covers/2019-tiragosto-pascoa.jpg';
import icon_instagram from './images/icons/instagram.svg';
import icon_youtube from './images/icons/youtube.svg';
import icon_facebook from './images/icons/facebook.svg';
import './App.scss';
import './styles/_reboot-yumpu.scss';

function App() {
  return (
    <div>
      <div className="container-init d-flex flex-column justify-content-center">
        <h1>Revista Degusta</h1>
        <hr />
        <div class="card-columns">

          <div className="card bg-gradient-dark">
            <img src={cover_winter_2019} className="card-img" alt="capa da primeira edição da revista degusta - inverno de 2019" />
            <div className="card-body">
              <h5 className="card-title">Inverno de 2019</h5>
              <p className="card-text">Comer é um aprendizado, é herança. A comida simples do dia-a-dia, os pratos típicos preparados há gerações, os lanches de rua e os pratos mais classe da banda assumem a mesma importância nesse contexto. A primeira edição da revista suavemente vai envolvendo pessoas da comunidade, profissionais, empresários, chefs, produtores e gastrônomos num debate democrático sobre os alimentos que consumimos e servimos. E sobre como a gastronomia influencia as experiências que vivemos aqui.</p>
              <a href="https://material.revistadegusta.com/baixar-revista-edicao-degusta-inverno-2019" className="btn btn-light mr-3">Baixar o PDF</a>
              <a href="https://www.yumpu.com/pt/document/view/62761663/revista-degusta-gastronomia-e-culinaria-regional" className="btn btn-outline-light">Ler online</a>
            </div>
          </div>

          <div class="card p-3 bg-gradient-light text-dark">
            <h5>fale conosto</h5>
            <p><a href="mailto:contato@revistadegusta.com">contato@revistadegusta.com</a></p>
            <p className="mb-0">praia do rosa/ibiraquera/imbituba/garopaba. santa catarina / Brasil</p>
          </div>

          <div className="card p-3 bg-gradient-light text-dark">
            <h5 className="card-title">acompanhe nosso conteúdo</h5>
            <ul className="list-unstyled mb-0">
              <li className="media mb-2">
                <img src={icon_instagram} className="align-self-center mr-2" style={{width: 1.5+'em'}} alt="facebook icon" />
                <div className="align-self-center media-body">
                  <a href="https://www.instagram.com/revistadegusta/">no instagram</a>
                </div>
              </li>
              <li className="media mb-2">
                <img src={icon_youtube} className="align-self-center mr-2" style={{width: 1.5+'em'}} alt="facebook icon" />
                <div className="align-self-center media-body">
                  <a href="https://www.youtube.com/channel/UCcRxoPEtYdUO5LQmZj7wPow">no youtube</a>
                </div>
              </li>
              <li className="media mb-2">
                <img src={icon_facebook} className="align-self-center mr-2" style={{width: 1.5+'em'}} alt="facebook icon" />
                <div className="align-self-center media-body">
                  no facebook
                </div>
              </li>
            </ul>
          </div>

          <div class="card p-3 bg-gradient-dark">
            <h5>assine nossa newsletter</h5>
            <p>Receba periodicamente as últimas atualizações do nosso conteúdo.</p>
            <form class="form-inline">
              <div class="form-group mb-0 ">
                <label for="email" class="sr-only">Email</label>
                <input classID="email" name="email" type="email" className="form-control" placeholder="email@exemplo.com" />
              </div>
              <input type="submit" className="btn btn-primary ml-1" />
            </form>
          </div>



          <div className="card bg-gradient-dark" >
            <img src={cover_pascoa_2019} class="card-img-top" alt="capa da edição tira gosto do carnaval de 2019" />
            <div className="card-body">
              <h5 className="card-title">Tira Gosto de Páscoa</h5>
              <p className="card-text">Para celebrar a Páscoa, visitamos os produtores locais, filmamos uma receita especial e preparamos um conteúdo recheado de delícias e boas dicas para comer o que há de melhor na região no feriado.</p>
              <a href="https://www.yumpu.com/pt/document/view/62755407/tiragosto-pascoa" className="btn btn-outline-light">Ler online</a>
            </div>
          </div>

          <div className="card bg-dark" >
            <img src={cover_carnaval_2019} class="card-img-top" alt="capa da edição tira gosto do carnaval de 2019" />
            <div className="card-body">
              <h5 className="card-title">Tira gosto de Carnaval</h5>
              <p className="card-text">Informação que cabe no bolso pra curtir o melhor do carnaval na praia.</p>
              <a href="https://www.yumpu.com/pt/document/view/62755389/tiragosto-sobreviva-ao-carnaval-na-praia-do-rosa" className="btn btn-outline-light">Ler online</a>
            </div>
          </div>

          <div class="card p-3 bg-gradient-info">
            <h5>nossos planos para anunciar</h5>
            <p>já estamos trabalhando na edição de verão 2019/2020. aproveite e divulgue sua marca também.</p>
            <a href="https://material.revistadegusta.com/material-de-divulgacao-de-vendas-da-revista-degusta" className="btn btn-outline-light">mais informações</a>
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
