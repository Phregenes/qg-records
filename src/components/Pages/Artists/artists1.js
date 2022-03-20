import React from "react";
import "./styles.css";

import Tim from "../../../assents/img/artistas/tim.jpg";
import TimGalvao from "../../../assents/img/artistas/TimEGalvao.jpg";

const Artists1 = () => {
  return (
    <div className="artistsContainer">
      <h1>TIM MC</h1>
      <div className="artists_Containder_p">
        <img className="artistas__img" src={Tim} />
        <p className="artists_p">
          MEU VULGO É TIM MC, FUI UM DOS PRIMEIROS MC'S A CHEGAR NO QG RECORDS,
          ONDE LANCEI MEU PRIMEIRO TRABALHO SOLO, UMA DAS MINHAS COMPOSIÇÕES
          MAIS QUERIDAS "TRAFICANTE DE INFORMAÇÃO", NÃO SOZINHO, COM MEU
          PARCEIRO GALVÃO, ONDE JUNTOS FORMAMOS O LACLASS, TAMBÉM GRAVAMOS
          MUSICAS QUE MARCARAM A REGIÃO COMO "ISSO NÃO É UM CYPHER" COM O QG
          RECORDS ESPERO CRESCER AINDA MAIS, COM MUITA DEDICAÇÃO E TRABALHO
        </p>
      </div>
      <div className="artists_Containder_p_invert">
        <p className="artists_p">
          Tim foi o primeiro integrante do grupo de Artistas QG Records, foi com
          ele que começamos nossos trabalhos e seguimos até hoje! Seu primeiro
          lançamento com a camiseta QG Records foi "Traficante de Informação",
          uma musica e videoclipe de extrema importância para o QG. Alem disso
          foi a primeira musica do Projeto Gênesis, onde nós visamos dar cada
          vez mais oportunidades a artistas que estão começando sua carreira
          musical! Hoje juntos já somamos 5 trabalhos lançados e diversos outros
          em andamento e finalização!
        </p>
        <img className="artistas__img" src={TimGalvao} />
      </div>
      <iframe src="https://open.spotify.com/embed/track/7giLSEAHtAb5524NEWwEaC?utm_source=generator&theme=0" width="80%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>
  );
};

export default Artists1;
