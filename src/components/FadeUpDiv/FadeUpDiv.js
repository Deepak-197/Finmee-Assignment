import React, { useEffect } from 'react';
import "./FadeUpDiv.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Image } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MTMTM from "../../assets/iStock-minetomine.jpg"
import Sustainability from "../../assets/iStock-sustainability.jpg"
import MinralP from "../../assets/iStck-minral.jpg";
import OilGas from "../../assets/2021-02-oil-and-gas-.png"


export const FadeUpDiv = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="company-sop-main-container">
            {/* <div className="section-header text-center" style={{padding: "5px"}}>
                <h2 className="section-heading">How does it work ?</h2>

            </div> */}
            <div className="promotional-area mt-100">
                <div className="promotional-area-con">
                    <div className="promotional-area-item1" data-aos="fade-up" data-aos-duration="1000">
                       
                        
                        <div className="promotional-content text-center">
                            <h2 className="promo-title">Mine-To-Mill-To-Mine Optimization</h2>
                            <p className="promo-subtitle">NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.</p>
                            <Stack sx={{ marginTop: "40px" }} spacing={4} direction="row">

                                <Button sx={{ marginTop: "40px", width: "150px", backgroundColor:"rgb(255,58,45)" }} variant="contained">Read More</Button>

                            </Stack>
                        </div>
                        <div >
                            <Image className="gineelogo" src={MTMTM}  />
                        </div>
                    </div>
                    <div className="promotional-area-item1" data-aos="fade-up" data-aos-duration="1000">
                       
                        <div >
                            <Image className="gineelogo" src={Sustainability}  />
                        </div>
                        <div className="promotional-content text-center">
                            <h2 className="promo-title">Sustainability</h2>
                            <p className="promo-subtitle">Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.
                              <br />
                              <br />
                              With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.
                            </p>
                            <Stack sx={{ marginTop: "40px" }} spacing={4} direction="row">

                                <Button sx={{ marginTop: "40px", width: "150px", backgroundColor:"rgb(255,58,45)" }} variant="contained">Read More</Button>

                            </Stack>
                        </div>
                    </div>
                    <div className="promotional-area-item1" data-aos="fade-up" data-aos-duration="1000">
                       
                        <div className="promotional-content text-center">
                            <h2 className="promo-title">Mineral Processing</h2>
                            <p className="promo-subtitle">NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</p>
                            <Stack sx={{ marginTop: "40px" }} spacing={4} direction="row">

                                <Button sx={{ marginTop: "40px", width: "150px", backgroundColor:"rgb(255,58,45)" }} variant="contained">Read More</Button>

                            </Stack>
                        </div>
                        <div >
                            <Image className="gineelogo" src={MinralP}  />
                        </div>
                    </div>
                    <div className="promotional-area-item1" data-aos="fade-up" data-aos-duration="1000">
                       
                        <div >
                            <Image className="gineelogo" src={OilGas}  />
                        </div>
                        <div className="promotional-content text-center">
                            <h2 className="promo-title">Oil & Gas</h2>
                            <p className="promo-subtitle">Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. 
                            <br />
                            <br />
                             NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety. </p>
                            <Stack sx={{ marginTop: "40px" }} spacing={4} direction="row">

                                <Button sx={{ marginTop: "40px", width: "150px", backgroundColor:"rgb(255,58,45)" }} variant="contained">Read More</Button>

                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-header text-center" style={{ marginTop: "15px", padding: "5px" }}>
            </div>
        </div>

    )
}