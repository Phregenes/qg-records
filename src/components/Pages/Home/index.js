import React from 'react';
import './styles.css';

import logo from '../../../assents/img/qg.svg';

const Home = () => 

<body>
  <div className="pimg1">
    <div className="ptext">
      <img src={logo}/>
    </div>
  </div>

  <section className="section section-1">
    <div>
    <iframe src="https://open.spotify.com/embed/playlist/2VvD9obKFx5NWXjtCd9Q1m" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  </section>

  <div className="pimg2">
    <div className="ptext">
      <span className="text-title">
        Produção musical
      </span>
    </div>
  </div>

  <section className="section section-2">
    <h2>Contato</h2>
    <h1 className="help">Estamos em obras, instagram</h1>
      <a className="btninsta" href="https://www.instagram.com/qgrecords/">
      <button className="bbtninsta">instagram</button>
    </a>
  </section>

  {/* <div className="pimg3">
    <div className="ptext">
      <span className="text-title">
        Produção Clip
      </span>
    </div>
  </div>

  <section className="section section-3">
    <h2>Nossos clipes</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae eros sed erat pellentesque tristique vel quis nulla. Aenean dui sapien, eleifend nec enim ullamcorper, commodo consequat ante. Phasellus posuere posuere tincidunt. Cras ante velit, aliquet a vulputate ut, dapibus vitae elit. Maecenas maximus massa leo, eget hendrerit mauris viverra eu. Donec eu porttitor nibh. Mauris eu gravida diam. Maecenas interdum pharetra lectus, in finibus sem imperdiet quis. Nam faucibus tortor urna. Ut ac molestie libero. Praesent at tortor placerat, mattis nunc at, auctor enim. Curabitur congue leo id mauris eleifend, fringilla efficitur est posuere. Aenean rhoncus semper dictum. Aenean cursus dapibus metus. Aliquam quis ultrices libero. Curabitur rhoncus dolor ac sem porta, sed blandit ligula luctus.
    </p>
  </section>

  <div className="pimg1">
    <div className="ptext">
      <span className="text-title">
        Social Media
      </span>
    </div>
  </div> */}
</body>

export default Home;