import React, { useEffect } from 'react';
import "./Ntwist.css"
import Navbar from '../Navbar/Navbar';
import imagentwist from "../../assets/home-image-icons-v7.png"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AOS from "aos";
import "aos/dist/aos.css";

export const Ntwist = () => {
  
  useEffect(() => {
    AOS.init();
}, [])

  return (
    <div className='ntwist'>
      <Navbar />
      <div className='ntwist-main'>
        <div className='ntwistdiv'>
          <div class="col-sm-6">
            <div class="box animate fadeInUp one" data-aos="fade-up" data-aos-duration="1000">
              <h1>Data-powered solutions for Industrial Excellence</h1>
            </div>
            <Stack sx={{marginTop:"40px", width:"150px"}} spacing={4} direction="row">

              <Button variant="contained">Read More</Button>

            </Stack>
          </div>
          <div>
            <img src={imagentwist} alt='ntwist' />
          </div>
        </div>
      </div>
    </div>

  )
}
