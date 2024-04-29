
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
                      <StaticImage src="../../../images/about-header-wba.png" quality={60} formats={["auto", "webp", "avif"]} />
                    </>
                   
                    
                </Carousel>

            </div>
          
            </div>

        
            <div className="hero-box">
                <div className="max-width">
                    <h1>About Us</h1>
                    <p> Nestled along the scenic Hummingbird Highway in the Cayo District, our locally operated tour company promises a top-notch experience during your Belizean escapade.</p>
              
                </div>
            </div>
     

        </div>              
	</div>

  

   
);
}


export default DiscoverHero