

import React from 'react';
import './Footer.css'; 
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter } from '@fortawesome/fontawesome-free-brands'
import footerLogo from "../../assets/ntwistlight-white.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        {/* 1st div with a logo */}
        <img src={footerLogo} alt="Logo" width={300} />
      </div>
      <div className="footer-column">
        {/* 2nd div with navigation links */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/sitemap">Sitemap</a></li>
        </ul>
      </div>
      <div className="footer-column">
        {/* 3rd div with address */}
        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
      </div>
      <div className="footer-column">
        {/* 4th div with social icons */}
        <div className="social-icons">
          <a href="https://twitter.com/IncNtwist" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter}  color='white'  />
          </a>
          <a href="https://www.linkedin.com/company/ntwist/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} color='white'  />
          </a>
        </div>
      </div>
      <div className="footer-column">
        {/* 5th div with copyright */}
        <p>&copy; 2022. Ntwist Inc.</p>
      </div>
    </footer>
  );
}


