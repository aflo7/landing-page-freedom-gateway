import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="mobile-nav">
        <div className="logo-wrapper">
          <img src="https://images.squarespace-cdn.com/content/v1/60e3cd911e13b469b3119c20/1625622932317-U1IP3RT0PQQMMKIZ88DI/fg_logo_gold.png?format=1500w" />
        </div>

        <div className="yellow-burger"></div>
        <div className="right-nav">
          <div className='home-btn'>Home</div>
          <div>Locations</div>
          <div>About</div>
          <div>Contact</div>
          <FaTwitter className='yellow-icon'/>
          <FaInstagram className='yellow-icon'/>
          <FaFacebookF className='yellow-icon'/>
          <FaLinkedin className='yellow-icon'/>
        </div>
      </nav>
      <main>
        <h1>Building the Future of Finance</h1>
        <button className='locations-btn'>Locations</button>
      </main>
    </>
  );
}

export default App;
