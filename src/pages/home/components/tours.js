import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Carousel } from "react-bootstrap"

const img1 = "../../../images/wba-tours-left.png"
const img2 = "../../../images/wba-tours1.png"
const img3= "../../../images/wba-tours2.png"
const img4= "../../../images/wba-tours3.png"
const img5= "../../../images/wba-tours4.png"


function Tours() {
	return (
        <div className="tours-main">
            <div className="welcome">
                <h2>Welcome to</h2>
                <h1>Belize Wildland Adentures</h1>
                <p>A locally operated tour company on the Hummingbird Highway in the Cayo District of Belize and comitted to providing you the best experience during your visit to Belize. We provide guided tours from exploring caves in the Mayan Underworld, hiking one of the highest peaks in the Maya Mountains to kayaking jungle rivers in the Belizean interior.</p>
            </div>
            <div className="tours-grid">
               <div className="row">
                 <div className="col-sm-6 main">
                    <a href="">
                        <StaticImage src={img1} />
                        <div className="tour-overlay-cont">
                            <span>Capture the Moment</span>
                            <h1>Our Recommended Adventures</h1>
                            <p>Join us in an exhilarating journey through Belize's breathtaking landscapes with us! Dive into heart-pounding cave tubing and conquer the mysterious depths with cave kayaking. Get up close and personal with exotic wildlife at the captivating Belize Zoo. Immerse yourself in the symphony of bird calls while exploring lush forests, and uncover the hidden secrets of crystal caves. Feel the adrenaline rush as you navigate the legendary Five Blues Lake. Step back in time with thrilling Mayan ruins exploration. All this and more await you along the scenic Hummingbird Highway, with our base at the enchanting St. Herman's Blue Hole. Get ready for the adventure of a lifetime!</p>
                            <a href="/all-tours/">
                                View All Adventures
                            </a>
                        </div>
                    </a>
                 </div>
                 <div className="col-sm-6 grid">
                    <div className="row">
                        <div className="col-sm-6">
                            <a href="/cave-tubing-tours-in-belize-with-wildland-belize-adventures/">
                            <StaticImage src={img2} />
                                <div className="tour-overlay-cont">
                                    <span>USD $50</span>
                                    <h1>Cave Tubing</h1>
                                    <p>Belize has an abundance of caves and underground rivers thanks to the local geology. Experience the excitement of floating from open river into the dark confines of underground waterways.</p>
                                    <a href="/cave-tubing-tours-in-belize-with-wildland-belize-adventures/">
                                        View Tour
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 kayaking">
                            <a href="/cave-and-river-kayaking-in-belize/">
                            <StaticImage src={img3} />
                            <div className="tour-overlay-cont">
                                    <span>USD $95</span>
                                    <h1>Cave Kayaking</h1>
                                    <p>Glide through the untamed waterways of Belize, exploring lush jungles and hidden underground rivers. Feel the rush as you navigate through winding passages and discover mesmerizing cave formations.</p>
                                    <a href="/cave-and-river-kayaking-in-belize/">
                                        View Tour
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-6 second">
                        <a href="/birding-watching-in-belize/">
                         <StaticImage src={img4} />
                         <div className="tour-overlay-cont">
                                    <span>USD $45</span>
                                    <h1>Birding</h1>
                                    <p>Ornothologist lovers are in for a treat in Belize. A wide range of avian species lives in Belize from the national bird the Keel Billed Toucan to the Harpy Eagle.</p>
                                    <a href="/birding-watching-in-belize/">
                                        View Tour
                                    </a>
                                </div>
                        </a>
                    </div>
                    <div className="col-sm-6 mayan">
                        <a href="/mayan-glory-san-ignacio/">
                        <StaticImage src={img5} />
                        <div className="tour-overlay-cont">
                                    <span>USD $80</span>
                                    <h1>Mayan Glory</h1>
                                    <p>Belize has a multitude of Mayan ruins with easy access to all visitors. You can visit Lamanai in the north, Caracol in the east or travel to Guatemala to visit the massive Mayan city of Tikal.</p>
                                    <a href="/mayan-glory-san-ignacio/">
                                        View Tour
                                    </a>
                                </div>
                        </a>
                    </div>
                    </div>

                </div>
               </div>
            </div>
       
        </div>

    );
}
          
export default Tours;              