import React from 'react';
import './styles.css';

import logo from '../../../assents/img/logo.png';
import One from '../../../assents/img/artistas/one.jpg';
import Tim from '../../../assents/img/artistas/tim.jpg';
import SocialMedia from '../../SocialMedia';
import MusicLibrary from '../../MusicLibrary';
import MenuBar from '../../MenuBar';

const Home = () => 

<body>
  <div className="pimg1">
    <div className="ptext">
      <img className="logo" src={logo}/>
      {/* <MenuBar /> */}
    </div>
  </div>

  <section className="section section-1">
    <div>
    <iframe src="https://open.spotify.com/embed/playlist/2VvD9obKFx5NWXjtCd9Q1m" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  </section>



  {/* <section className="section section-2">
    <h1>
      Que somos?
    </h1>
    <p>
    O QG Records®️ é uma gravadora e produtora da Zona Norte de São Paulo, fundado em fevereiro de 2020 com o objetivo de promover e dar oportunidade na cena da musica. Em 2020 o QG Records®️ produziu mais de 10 artistas e lançou 6 Musicas com videoclipe somando mais de 30.000 Visualizações e 10mil seguidores em suas redes sociais, agora em 2021 com o novo processo de aceleração, estamos atraindo ainda mais artistas e se consagrando na cena no rap.
    </p>
    <MusicLibrary />
  </section> */}

  <section className="section section-3">
    <h2>Nossos Artistas</h2>
    <div className="boxContainer">
      <div className="boxProduct">
      <h3>TIM MC</h3>
        <img className="artistas" src={Tim}/>
      </div>
      <div className="boxProduct">
      <h3>One fé MC</h3>
        <img className="artistas" src={One}/>
      </div>
    </div>
  </section>

  <div className="pimg2">
    <div className="ptext">
      <span className="text-title">
         
      </span>
    </div>
  </div>

    <section className="section section-2">
    <h1>
      Que somos?
    </h1>
    <p>
    O QG Records®️ é uma gravadora e produtora da Zona Norte de São Paulo, fundado em fevereiro de 2020 com o objetivo de promover e dar oportunidade na cena da musica. Em 2020 o QG Records®️ produziu mais de 10 artistas e lançou 6 Musicas com videoclipe somando mais de 30.000 Visualizações e 10mil seguidores em suas redes sociais, agora em 2021 com o novo processo de aceleração, estamos atraindo ainda mais artistas e se consagrando na cena no rap.
    </p>
    <MusicLibrary />
  </section>

  <div className="pimg3">
    <div className="ptext">
      <SocialMedia />
    </div>
  </div>
</body>

export default Home;