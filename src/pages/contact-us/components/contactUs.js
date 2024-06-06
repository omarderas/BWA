import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

import { StaticQuery, graphql, Link } from "gatsby"



function ContactUs({data}) {
	return (
      
    <div className="tours contact">
      <Container>
      <div className="contact-cta">
          <div className="row">
             <div className="col-sm-6">
 
             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15249.760458977958!2d-88.6945419!3d17.1487889!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5dc52717b3cd67%3A0x6ab6eafd438d49e9!2sWildland%20Belize%20Adventures!5e0!3m2!1sen!2sbz!4v1714017471340!5m2!1sen!2sbz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             </div>
             <div className="col-sm-6">
             <div className="contact-info">
                 <span>
                  <p>St. Herman's Blue Hole<br />
                      Hummingbird Highway<br />
                      Cayo District, Belize C.A.
                  </p>
                  <p>Tel: 
                    <a href="tel:5016029544">
                    +(501) 602-9544
                    </a>
                  </p>
                  <p>Email: 
                    <a href="mailto:info@wildlandbelizeadventures.com">
                    info@wildlandbelizeadventures.com
                    </a>
                  </p>
                 </span>
              </div>
               <div class="elfsight-app-104bb84c-c718-44f9-b31e-a543fa4e2428" data-elfsight-app-lazy></div>
               
             </div>
            </div>             
        </div>
      </Container>
    </div>
    )}
        
export default ContactUs;

