import React from 'react';
import { Link } from 'react-router-dom';
import back from '../assets/images/back.png';
import mic from '../assets/images/mic.png';
import setting from '../assets/images/setting.png';
import '../assets/style/navigation.css';

const Navigation = () => (
  <div className="nav-currency">
    <Link to="/" className="nav-left">
      <img src={back} alt="back" className="header-icon" />
      <h2>2023</h2>
    </Link>
    <h3 className="nav-input">World Currency Application </h3>
    <div className="nav-right">
      <img src={mic} alt="mic" className="header-icon header-mic" />
      <img src={setting} alt="setting" className="header-icon" />
    </div>
  </div>
);

export default Navigation;
