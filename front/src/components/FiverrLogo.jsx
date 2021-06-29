import React from 'react';
import Logo from '../images/fiverr-community-logo-200.png';
import './FiverrLogo.css';

function FiverrLogo() {
  return (
    <div className="logoContent">
      <img src={Logo} className="fiverr-community-logo-200" alt="fiverr-community-logo-200" />
    </div>
  );
}

export default FiverrLogo;
