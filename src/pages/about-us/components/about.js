import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"
import { StaticQuery, graphql, Link } from "gatsby"


const buttonText = "Learn More"

function About({data}) {
	return (
    <div className="tours about">
      <Container>
         <div className="contact-cta">
                <p>Step into the realm of adventure with Belizean visionaries Arnold Guevara and Isreal Manzanero at the helm, boasting over 15 years of expertise in crafting bespoke journeys. Their passion for conservation is palpable as they personally champion the protection of Belize's diverse flora and fauna, holding esteemed certification as Medical Search and Rescue guides.

Nestled amidst the picturesque landscapes of the Hummingbird Highway in the enchanting Cayo District, our locally beloved tour company guarantees an unparalleled expedition through Belize. From venturing into the enigmatic caves of the Mayan Underworld to conquering the towering peaks of the Maya Mountains, and gracefully gliding along verdant jungle rivers in the heart of Belize, we specialize in orchestrating adventures that seamlessly blend exhilaration with a profound reverence for nature's marvels.

Reach out today to embark on a journey that promises not just thrills, but an authentic connection to the soul-stirring beauty of Belize.</p>   
          
          <a href="/contact-us">
            Contact us
          </a>
          </div>
      </Container>
    </div>
    )}
        
  


export default About;

