import React from 'react';
import './About.css'
function About() {
  return (
    <div className='about' id='About'>
        <p>About Us</p>
        <div>
            <p>ConvoConnect is an innovative video conferencing platform 
            designed to bring people closer together, no matter where they 
            are. Utilizing cutting-edge WebRTC technology, ConvoConnect enables 
            seamless, high-quality video calls between two participants, offering
             a reliable and user-friendly experience.</p>
             <div className='boxes'>
              <p>Real-Time Communication</p>
              <p>User-Friendly Interface</p>
              <p>No Downloads Required</p>
             </div>
        </div>

    </div>
  );
}

export default About; 