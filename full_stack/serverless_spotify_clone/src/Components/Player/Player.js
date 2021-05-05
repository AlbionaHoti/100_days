import './Player.css';

import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="body">
        <Sidebar />
        <Home />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
