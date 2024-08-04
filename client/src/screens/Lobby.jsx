import React, { useState } from 'react';
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Features from "./Features.jsx";
import Footer from "./Footer.jsx";
import CTA from "./CTA.jsx";
import CtaLobby from "./cta-lobby.jsx";

function Lobby() {
  const [showCtaLobby, setShowCtaLobby] = useState(false);

  const handleEnterLobby = () => {
    setShowCtaLobby(true);
  };

  const handleGoBack = () => {
    setShowCtaLobby(false);
  };

  return (
    <div>
      <Navbar />
      <Home />
      {showCtaLobby ? (
        <CtaLobby onGoBack={handleGoBack} />
      ) : (
        <CTA onEnterLobby={handleEnterLobby} />
      )}
      <About />
      <Features />
      <Footer />
    </div>
  );
}

export default Lobby;
