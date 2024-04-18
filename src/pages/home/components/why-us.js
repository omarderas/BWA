import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const aboutImg = "../../../images/about-bg-new.png"
const aboutImgMask = "../../../images/about-img-bg-vector.png"

function WhyUs() {
  return (
    <div className='why'>
       <div className='why-cont'>
            <h2>Belize Wildland Adventures</h2>
            <h1>Why Choose Us</h1>
            <div className='row'>
                <div className='col-sm-3'>
                    <div className='cont'>
                        <div className='cont-icon'>
                        <i class="fa fa-gg" aria-hidden="true"></i>
                        </div>
                        <h3>Best Price Guarantee</h3>
                        <p>With us, you can explore the wonders of Belize without worrying about breaking the bank, as we strive to make adventure accessible to everyone.</p>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='cont'>
                        <div className='cont-icon'>
                        <i class="fa fa-diamond" aria-hidden="true"></i>
                        </div>
                        <h3>Top Notch Service</h3>
                        <p>We take pride in delivering top-notch service that goes beyond expectations, ensuring every moment of your journey is filled with excitement, comfort, and unforgettable memories.</p>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='cont'>
                        <div className='cont-icon'>
                        <i class="fa fa-certificate" aria-hidden="true"></i>
                        </div>
                        <h3>Experienced Guides</h3>
                        <p>Our team of seasoned professionals, led by Belizean owners Arnold Guevara and Isreal Manzanero, boasts over 15 years of expertise in guiding explorations across Belize's breathtaking landscapes. </p>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='cont'>
                        <div className='cont-icon'>
                        <i class="fa fa-binoculars" aria-hidden="true"></i>
                        </div>
                        <h3>Various Adventures</h3>
                        <p>From exploring ancient Mayan ruins steeped in history to embarking on adrenaline-pumping cave tubing and kayaking expeditions, every moment is an invitation to discover the wonders of Belize's natural beauty. </p>
                    </div>
                </div>
            </div>

            <div className='about-cont'>
                 <div className='row'>
                        <div className='col-sm-6'>
                            <h2>Get to Know Us</h2>
                            <h1>About Belize Wildland Adventures</h1>
                            <p>
                            Meet Belizean owners Arnold Guevara and Isreal Manzanero, with over 15 years of experience, ready to craft an unforgettable adventure tailored to your journey. Their commitment to conservation shines through as they dedicate personal time to safeguard Belize's precious flora and fauna, backed by their certification as Medical Search and Rescue guides. <br />

                            Nestled along the scenic Hummingbird Highway in the Cayo District, our locally operated tour company promises a top-notch experience during your Belizean escapade. From delving into the mystical caves of the Mayan Underworld to scaling the majestic peaks of the Maya Mountains, and gliding along jungle rivers in the Belizean heartland, we curate journeys that blend thrills with deep respect for nature's wonders.
                            </p>
                            <a href="">
                                Read More
                            </a>
                        </div>
                        <div className='col-sm-6'>
                            <StaticImage src={aboutImg} />
                            <StaticImage src={aboutImgMask} className='maskImg' />
                        </div>
                 </div>
            </div>

            {/*<div className='reviews'>
                <h1>See What Our Clients Say</h1>
                <div class="elfsight-app-a397b56c-f69a-44f1-b65d-8a35f45d49eb" data-elfsight-app-lazy></div>
            </div>*/}
       </div>
    </div>
  )
}

export default WhyUs
