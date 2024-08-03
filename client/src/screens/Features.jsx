import React from 'react';
import './Features.css'
import home from './home2.png';
function Features() {
  return (
    <div className='features'>
        <img src={home} alt='Home' />
        <div className='text' id="features" >
        <p>Instant Connections, Real-Time Conversations—ConvoConnect <br/>Makes Video Calling Effortless.</p>
        <p>Simple and Accessible—Join Video Calls Directly <br/>from Your Browser with ConvoConnect.</p>
        <p>ConvoConnect is your go-to solution for all your <br/>video calling needs.</p>
        <p>Say goodbye to complicated setups—ConvoConnect <br/>makes video calling as easy as 1-2-3 <br/>from your browser.</p>
        
        </div>
    </div>
  );
}

export default Features;  
