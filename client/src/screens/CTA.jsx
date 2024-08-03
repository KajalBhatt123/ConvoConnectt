import React from 'react';
import './CTA.css';
import join from './join.png';
function CTA() {
  return (
    <div className='cta' id='CTA'>
        <p>Join the Conversation Now!<br/><br/> Click the button below to enter the lobby and start your video call experience with ConvoConnect.</p>
            <div className='join'>
            <a><img src={join}/></a>
            <a><button>Enter Lobby</button></a>
            </div>
    </div>
  );
}

export default CTA; 