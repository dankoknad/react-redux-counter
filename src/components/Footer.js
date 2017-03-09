import React from 'react';
import logoReact from '../logo-react.svg';
import logoRedux from '../logo-redux.png';
import logoBootstrap from '../logo-bootstrap.png';

export default function Footer() {
  return (
    <div>
      <p>Powered by:</p>
      <p>
        <img width="50" src={logoReact} alt="..." title="React" /> + 
        <img width="50" src={logoRedux} alt="..." title="Redux" />+ &nbsp;
        <img width="40" src={logoBootstrap} alt="..." title="Bootstrap" />
      </p>
      <p>Made with <span style={{fontSize: 18}} className="text-danger">♥</span> by <a href="http://dankoknad.github.io/" target="_blank">Danko</a></p>
    </div>
  )
}