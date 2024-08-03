import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css' ;


function Navbar() {
  return (
    // <div className='navbar navbar-expand-lg' id='Home'>
    //     <p className='convoconnect'>ConvoConnect</p>
    //     <div className='other'>
    //         <a href='#Home'>Home</a>
    //         <a href='#CTA'>Call-to-Action</a>
    //         <a href='#About'>About Us</a>
    //         <a href='#features'>Features</a>
            
    //     </div>
    // </div>
    <nav className="navbar navbar-expand-xl bg-body-tertiary navbarr">
      <div className="container-fluid">
        <a className="navbar-brand convoconnect" id='Homee' href="#">ConvoConnect</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav other">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#Homee">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#CTA">Call-To-Action</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#features'>Features</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;