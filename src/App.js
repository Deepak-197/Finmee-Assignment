// import logo from './logo.svg';

import './App.css';
import { FadeUpDiv } from './components/FadeUpDiv/FadeUpDiv';
import { Footer } from './components/Footer/Footer';

import { Ntwist } from './components/Ntwist/Ntwist';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useEffect, useState } from 'react';





function App() {

  // const scrollHandler = () => {
  //   window.scrollTo(0, 0)
  // }

  const [isVisible, setIsVisible] = useState(false);
  

 

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 200) {
       
          setIsVisible(true);
       
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        {/* <button className='scroll-btn' onClick={scrollHandler}><ExpandLessIcon  /></button> */}

        <button
          className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          <ExpandLessIcon  />
        </button>
      </div>
      <Ntwist />
      <FadeUpDiv />
      <Footer />
      <div className='language-btn'>
      <img src="https://ntwist.com/wp-content/plugins/gtranslate/flags/svg/en.svg" alt="flag" />
      <h3>EN </h3><ExpandLessIcon color='rgb(249, 249, 249)' />

      
      
      </div>
    </div>
  );
}

export default App;
