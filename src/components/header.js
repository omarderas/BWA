import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./../less/header.scss";

const logo = "../images/wba-logoMain.png"

const Header = ({ siteTitle }) => (
  <header>
  <div className="top-bar">
    <div className="row">
       <div className="col-sm-6 first">
           <ul className="social">
              <li>
                 <a href="tel:6146357">
                 <i class="fa fa-phone"></i><span>501-614-6357</span>
                 </a>
              </li>
              <li>
                 <a href="mailto:info@wildlandbelizeadventures.com">
                 <i class="fa fa-envelope"></i><span>info@wildlandbelizeadventures.com</span>
                 </a>
              </li>
           </ul>
       </div>
       <div className="col-sm-6 second">
       <ul className="social">
              <li>
                 <a href="https://www.facebook.com/wildlandbelize/" target="_blank">
                 <i class="fa fa-facebook"></i>
                 </a>
              </li>
              <li>
                 <a href="">
                 <i class="fa fa-instagram"></i>
                 </a>
              </li>
              <li className="book-now">
                 <a href="/contact-us">
                   Book Now
                 </a>
              </li>
           </ul>
       </div>
    </div>
  </div> 
   <div className="header-nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">  <StaticImage src={logo} /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about-us">Who We Are</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/all-tours" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our Adventures
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/all-tours">All Tours</a></li>
                <li><a class="dropdown-item" href="/cave-and-river-kayaking-in-belize/">River Kayaking</a></li>
             
                <li><a class="dropdown-item" href="/cave-tubing-tours-in-belize-with-wildland-belize-adventures/">Cave Tubing</a></li>
                <li><a class="dropdown-item" href="/crystal-cave-in-belize-with-wildland-belize-adventures/">Crystal Cave</a></li>
                <li><a class="dropdown-item" href="/visit-belize-zoo-with-wildland-belize-adventures/">Belize Zoo</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/shuttle-me">Shuttle Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact-us/">Contact Us</a>
            </li>
          </ul>
      
        </div>
      </div>
    </nav>
    </div>
  </header>
)

export default Header
