
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
      
            <div className="discover-carousel">
           
            <div >

                <Carousel >
                   
                    <>
                      <StaticImage src="../../../images/shuttle-header-wba.png" quality={60} formats={["auto", "webp", "avif"]} />
                    </>
                   
                    
                </Carousel>

            </div>
          
            </div>

        
            <div className="hero-box">
                <div className="max-width">
                    <h1>Shuttle Me</h1>
                    <p> Experience seamless travel with our Shuttle Me services, designed to whisk you away to Belize's most captivating destinations in comfort and style. Our fleet of modern vehicles, operated by experienced drivers, ensures safe and reliable transportation for your every journey.</p>
                </div>
            </div>
     

        </div>              
	</div>

  

   
);
}


export default DiscoverHero