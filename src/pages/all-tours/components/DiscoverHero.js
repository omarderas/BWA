
import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function DiscoverHero() {

	return (
                 
    <div className="discover-hero">

        <div className="wrapper">
            <div className="tour-overlay"></div>
            <div className="discover-carousel">
           
            <div >

                <Carousel >
                   
                    <>
                      <StaticImage src="../../../images/wba-tour-header.png" quality={60} formats={["auto", "webp", "avif"]} />
                    </>
                   
                    
                </Carousel>

            </div>
          
            </div>

        
            <div className="hero-box">
                <div className="max-width">
                    <h1>All Tours</h1>
                    <p> We provide guided tours from exploring caves in the Mayan Underworld, hiking one of the highest peaks in the Maya Mountains to kayaking jungle rivers in the Belizean interior.</p>
                </div>
            </div>
     

        </div>              
	</div>

  

   
);
}


export default DiscoverHero