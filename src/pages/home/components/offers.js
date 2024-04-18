import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const offers1 = "../../../images/offers1.png"
const offers2 = "../../../images/offers2.png"
const offers3 = "../../../images/offers3.png"
const trip = "../../../images/trip-advisor.png"
const trip1 = "../../../images/btb-gold-medal-standard.png"

function Offers() {
  return (
    <div className='offers-main'>
        <div className='offers-overlay'></div>
       <div className='offers-cont'>
          <div className='row'>
              <div className='col-sm-6 offers'>
                    <h3>We create memories</h3>
                    <h1>What We Offer</h1>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <StaticImage src={offers1} />
                        </div>
                        <div className='col-sm-7'>
                            <h1>Thrilling Inland Adventures</h1>
                            <p>We offer Cave Kayaking, Cave Tubing, Bird Watching, Mayan Ruins, Belize Zoo and the Famous Five Blues Lake Adventures.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-3'>
                        <StaticImage src={offers2} />
                        </div>
                        <div className='col-sm-7'>
                            <h1>Pick Up & Drop Off</h1>
                            <p>Hassle-free travel with our convenient pick-up and drop-off services. Sit back, relax, and let us take care of your transportation needs</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-3'>
                        <StaticImage src={offers3} />
                        </div>
                        <div className='col-sm-7'>
                            <h1>Shuttle Me Services</h1>
                            <p>Whether you're heading to the airport, exploring local attractions, or venturing into the city, count on us for reliable transportation.</p>
                        </div>
                    </div>
              </div>
              <div className='col-sm-6 reviews'>
                    <h3>See What Our Clients Say</h3>
                    <div class="elfsight-app-a397b56c-f69a-44f1-b65d-8a35f45d49eb" data-elfsight-app-lazy></div>
                <div className='certs'>
                    <div className='row'>
                        <div className='col-sm-3'>
                        <StaticImage src={trip1} />
                        </div>
                        <div className='col-sm-3'>
                            <StaticImage src={trip} />
                        </div>
                    </div>
                </div>
             
              </div>
          </div>
       </div>
    </div>
  )
}

export default Offers
