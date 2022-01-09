import React from 'react';
import './styles.css';

import logo from '../../../assents/img/qg.svg';

const Links = () => {
  return (
    <div className="containerLink">
      <img className="logoLinks" src={logo}/>
      <p className="ptext">"Ajudando a construir seu sonho com qualidade" 🎧🎥🎤</p>
      <a className="buttonLink" href="https://www.youtube.com/watch?v=xO483THlUmg">One Fé MC - Relatos Periféricos (Part. Alyne)</a> 
      <a className="buttonLink" href="https://www.youtube.com/playlist?list=PLtxc9nDTD6PUwnN92d6F0nY48n-xBFYdE&ltclid=09db5a6a-ae78-449c-b51c-2ba634bb0276">QG Records - Only | Youtube Playlist</a>
      <a className="buttonLink" href="https://open.spotify.com/playlist/2VvD9obKFx5NWXjtCd9Q1m?si=_TCf4pJNSpqkHknOa9AkEQ&ltclid=bc30b1fc-8563-4b21-bc7b-15123851f24b">Lançamentos QG Records (Spotify)</a>
      <a className="buttonLink" href="https://deezer.page.link/dPxvsU8Kebfvexu66?ltclid=d5318e2f-b96e-41cf-994c-0fc85c9fb0ce">Lançamentos QG Records (DEEZER)</a>
      <a className="buttonLink" href="https://api.whatsapp.com/message/JXHAMBEIPBYSH1">Nosso Whatsapp</a>
    </div>
  );
}

export default Links;
