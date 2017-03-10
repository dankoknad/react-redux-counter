import React from 'react';
import logoReact from '../logo-react.svg';
import logoRedux from '../logo-redux.png';
import logoBootstrap from '../logo-bootstrap.png';

export default function Footer() {
  return (
    <div className="footer">
      <h4>Powered by:</h4>
      <div>
        <img width="50" src={logoReact} alt="..." title="React" /> + 
        <img width="50" src={logoRedux} alt="..." title="Redux" />+ &nbsp;
        <img width="40" src={logoBootstrap} alt="..." title="Bootstrap" />
      </div>
      <h4>Made with <span style={{fontSize: 18}} className="text-danger">♥</span> by <a href="http://dankoknad.github.io/" target="_blank">Danko</a></h4>
    </div>
  )
}