import React from 'react';
import './styles.css';

// import Menu from '../../components/NavBar';

const Links = () => {
  return (
    <div className="containerLink">
    <button className= "buttonLink">
      <a href="https://www.youtube.com/watch?v=Qdo88sySkrI" class="button">Rikardimas - Laroyê</a>
    </button>
    <button className= "buttonLink">
      <a href="https://www.youtube.com/watch?v=2n0UTWMWZm4" class="button">La Class & WN - Primeiro Ciclo</a>
    </button>
    <button className= "buttonLink">
      <a href="https://soundcloud.com/prodnthn/sets/purple-catalogo-de-beats-prod-nthn?ltclid=8d0da8a3-dfb8-484f-abfe-a9a1d04b8ee6" class="button">CATÁLOGO DE BEATS (Prod. Nthn)</a>
    </button>
    <button className= "buttonLink">
      <a href="https://open.spotify.com/playlist/2VvD9obKFx5NWXjtCd9Q1m?si=_TCf4pJNSpqkHknOa9AkEQ&ltclid=47412a55-a4f0-4b00-b82b-59b24b53cb43&nd=1" class="button">Lançamentos QG Records (spotify)</a>
    </button>
    <button className= "buttonLink">
      <a href="https://api.whatsapp.com/message/JXHAMBEIPBYSH1" class="button">Nosso whatsapp</a>
    </button>
    <button className= "buttonLink">
      <a href="https://www.instagram.com/qgrecords.sc/?ltclid=4d72e0c1-cbd3-4bf2-8612-cff77897c919" class="button">QG Records SC</a>
    </button>
    <button className= "buttonLink">
      <a href="https://www.youtube.com/watch?v=nZpL3QBGt8M&ltclid=242a3e3c-1bae-47ac-86e4-25b24a7ee03b" class="button">One Fé MX - Sonho Interrompido</a>
    </button>
    </div>
  );
}

export default Links;