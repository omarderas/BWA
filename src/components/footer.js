import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./../less/footer.scss";

import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";

const MainLogo = "../images/bhe-Logo.png";
     

function Footer() {
	return (
    <div className="footer">
        <div className="footer-wrapper">
        <div className="row">
            <div className="col-sm-4">
                <div className="footer-content">
               <h1>Wildland Belize Adventures</h1>
                <p>Nestled along the scenic Hummingbird Highway in the Cayo District, our locally operated tour company promises a top-notch experience during your Belizean escapade.</p>
                    <ul className="social">
                                <li>
                                   
                                    <a href="" target="_blank"><FaFacebookF /></a>
                                    <a href="" target="_blank"><FaInstagram /></a>
                                 
                                </li>
                            
                    </ul>
                </div>
            </div>

            <div className="col-sm-4 second">
                <div className="footer-content">
                    <h1>Reach Us</h1>
                    <p>
                        Tel:
                   
                     <a href="tel:5016029544"> +(501) 602-9544</a>
                    </p>
                    <p>
                        Email:
                    
                    <a href="mailto:info@belizewildlandadventures.com"> info@belizewildlandadventures.com</a>
                    </p>
                    <p>
                        Hours:
                   
                    <a href=""> Mon - Sun, 8:00am to 4:00pm CST</a>
                    </p>
                </div>
            </div>
            <div className="col-sm-4">
               <div className="footer-content">
                        <h1>Contact Us</h1>
                        <div class="elfsight-app-104bb84c-c718-44f9-b31e-a543fa4e2428" data-elfsight-app-lazy></div>
               
                </div>
            </div>

        </div>
        <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} Belize Wildland Adventures. All Rights Reserved. Belize.<a href="https://belbytedesigns.com/" target="_blank"> [ Powered by Belbyte Designs ]</a></p>
        </div>
        </div>
        <div className="footer-bottom-bg">

        </div>
       
	</div>
    

    );
}

export default Footer;

