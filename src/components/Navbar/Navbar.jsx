import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import ntwistLogo from "../../assets/ntwist-logo-dark.png"
import ntwistwhitelogo from "../../assets/ntwistlight-white.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [isIndustriesOpen, setIndustriesOpen] = useState(false);
  const [screenSize, setScreenSize] = useState('');


  const [scroll, setScroll] = useState(false);


  const toggleIndustries = () => {
    setIndustriesOpen(!isIndustriesOpen);
  };

  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
   window.scrollY >= 50 ? setNavBg(true) : setNavBg(false);
  }
console.log(navBg);
  useEffect(() => {
    
    // window.addEventListener('scroll', changeNavBg);
    // return () => {
    //   window.removeEventListener('scroll', changeNavBg);
    // }

    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
  }, [])
  

  return (
    <nav className={`${scroll ? "sticky-nav " : "bg-nav "}navbar`}>
      <div className="navbar-logo">
      {
        scroll ?<img src={ntwistLogo} alt='NTWIST' />:<img src={ntwistwhitelogo} alt='NTWIST' />
      }
      </div>
      <ul className={`navbar-menu ${scroll ? "navbar-data" : "navbar-menu"}`}>
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li
          className={`navbar-item   ${isIndustriesOpen ? 'active' : ''}`}
          onMouseEnter={toggleIndustries}
          onMouseLeave={toggleIndustries}
        >
          <a href="/"><span>Industries </span><ArrowDropDownIcon color='white'  /></a>
          {isIndustriesOpen && (
            <div className="dropdown">
              <ul className="dropdown-menu">
                <li className="kdjshkhfd">
                  <a  href="/">Sustainability</a>
                </li>
                <li className="kdjshkhfd">
                  <a href="/">Mineral Processing</a>
                </li>
                <li>
                  <a href="/">Mill-to-Mine-To-Mill Optimization</a>
                </li>
                <li>
                  <a href="/">Oil & Gas</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="navbar-item">
          <a href="/">AI Software</a>
        </li>
        <li className="navbar-item">
          <a href="/">Blog</a>
        </li>
        <li className="navbar-item">
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
