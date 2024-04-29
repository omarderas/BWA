
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
                      <StaticImage src="../../../images/contact-headerMain.png" quality={60} formats={["auto", "webp", "avif"]} />
                    </>
                   
                    
                </Carousel>

            </div>
          
            </div>

        
            <div className="hero-box">
                <div className="max-width">
                    <h1>Contact Us</h1>
                    <p>Get in touch with us to start your adventure! Whether you have questions, want to book a tour, or just say hello, we're here and ready to help. Reach out now and let's make your Belize experience unforgettable!</p>
                </div>
            </div>
     

        </div>              
	</div>

  

   
);
}


export default DiscoverHero