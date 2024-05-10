import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Carousel } from "react-bootstrap"

const slide1 = "../../../images/wba-landing.png"


function Hero() {
	return (

    <div className="hero">
   
      <div className="main-overlay"></div>
    
        <div className="hero-carousel" >
                       <Carousel fade >
                                
                                <Carousel.Item>
                                    <StaticImage src={slide1} />
                                        
                                    </Carousel.Item>
                               

                            </Carousel>  
	     </div>

   
      <div className="hero-content">
        <div className="header-overlay"><h1>Wildland Belize</h1></div>
       <p>Revive Yourself</p>
       <h1>A Portal to Nature's Wonders</h1>
       <a href="/all-tours/">
           Our Adventures
       </a>
      </div>

  
	</div>

    );
}
          
export default Hero;              