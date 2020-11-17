import React from 'react';
import yellowSparkle from '../images/yellow-sparkle.png';

const Footer = (props) => {
  return(
    	<footer className="footer-area bg-f">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h3>About Us</h3>
              <p>We are Babita and Rana the owners of Babita's Spice Deli.  Our small business began in 2015 and was born after our own search to find Indian street food dishes in Swansea that reminded us of our childhood dishes eaten growing us.</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3>Ordering hours</h3>
              <p><span className="text-color">Mon-Thu: </span>Closed</p>
              <p><span className="text-color">Fri-Sun :</span> 5:PM - 10PM</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3>Contact information</h3>
              <p className="lead">Swansea, Wales</p>
              <p className="lead"><a href="#">++44 </a></p>
              <p><a href="#"> sales@babitasspricedeli.co.uk</a></p>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="company-name">All Rights Reserved. &copy; 2020 <a href="#">Babita's spice deli</a> Design By : YellowSparkle <img src={yellowSparkle} height="20px" width="20px" /></p>
              </div>
            </div>
          </div>
        </div>
        
      </footer>
  )
}

export default Footer;
