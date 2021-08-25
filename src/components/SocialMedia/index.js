import React from 'react';
import './styles.css';

import logo from '../../assents/img/qg.svg';

const SocialMedia = () => {
  return (
    <div className="containerSocial">
      <div className="liSocial"><a href="https://codepen.io/Stockin/pen/jeNQEN"><img className="logo" src={logo}/></a></div>
    </div>
  );
}

export default SocialMedia;