import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

import { StaticQuery, graphql, Link } from "gatsby"


const buttonText = "Learn More"

function Shuttle({data}) {
	return (
    <div className="tours about">
      <Container>
         <div className="contact-cta">
                <p>
                Whether you're arriving at the airport and need a hassle-free transfer to your accommodation, or seeking a convenient way to explore Belize's natural wonders and cultural treasures, wildaland Belize Adventures has you covered. Sit back, relax, and let us take care of the logistics, so you can focus on soaking in the beauty and adventure that Belize has to offer.

From personalized private transfers to group excursions, our Shuttle Me services cater to your specific needs, ensuring a memorable and enjoyable travel experience from start to finish. Contact us today to book your ride and embark on a journey filled with convenience and exploration!        
                </p>
                <a href="/contact-us">
                  Contact Us
                </a>
          </div>
      </Container>
    </div>
    )}
        
  


export default Shuttle;

