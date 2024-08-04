import React from 'react';
import './CTA.css';
import join from './join.png';

function CTA({ onEnterLobby }) {
  return (
    <div className='cta' id='CTA'>
      <p>Join the Conversation Now!<br/><br/> Click the button below to enter the lobby and start your video call experience with ConvoConnect.</p>
      <div className='join'>
        <a href='#' onClick={onEnterLobby}>
          <img src={join} alt="Join" />
        </a>
        <button onClick={onEnterLobby}>Enter Lobby</button>
      </div>
    </div>
  );
}

export default CTA;
