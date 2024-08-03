import React from 'react';
import './Home.css';
import home from './home.png';
import img from './img1.jpg';
function Home() {
  return (
    <div className='home'>
        <div className='home2'>
            <img src={home} alt='Home' className='img1' />
            <img src={img} alt="" className='img2' />
            <p>Connect with Ease—Effortless One-on-One Video Calls with ConvoConnect !</p>
        </div>
    </div>
    
  );
}

export default Home;
