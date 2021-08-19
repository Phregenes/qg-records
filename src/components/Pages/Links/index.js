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
    </div>
  );
}

export default Links;