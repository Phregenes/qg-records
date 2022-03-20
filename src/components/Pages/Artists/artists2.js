import React from "react";
import "./styles.css";

import OneFe from "../../../assents/img/artistas/one.jpg";
import Ale from "../../../assents/img/artistas/Ale.jpg";

const Artists2 = () => {
  return (
    <div className="artistsContainer">
      <h1>One Fé</h1>
      <div className="artists_Containder_p">
        <img className="artistas__img" src={OneFe} />
        <p className="artists_p">
          Meu vulgo é One Fé MC, e para mim O principio da luta social é
          informação e organização, foi com esses preceitos que ingressei no QG
          Records e acabei jançando3 projetos ligados diretamente as causas
          sociais. Para os proximos projetos pretendo aproximar ainda mais esses
          principios a minha musica, com O apoio da QG para fazer o melhor com
          competência.
        </p>
      </div>
      <div className="artists_Containder_p_invert">
        <p className="artists_p">
          @one_fe_mc foi o artista que conquistou nossa equipe por conta de toda
          sua historia de luta e superação, mostrando que a oportunidade é um
          grande divisor de aguas. Conhecido por não ter "massagem" e sim
          "mensagem" em suas letras o One fé já lançou 3 trabalhos juntos ao QG
          Records e já soma mais de 20.000 views em seus últimos trabalhos. São
          diversos outros projetos que estão em andamento e rumo ao seu
          lançamento!
        </p>
        <img className="artistas__img" src={Ale} />
      </div>
        <iframe src="https://open.spotify.com/embed/track/68YJkCUpg1SvQkpivuR0vh?utm_source=generator&theme=0" width="80%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>
  );
};

export default Artists2;
