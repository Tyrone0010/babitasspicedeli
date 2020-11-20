import React from 'react';
import yellowSparkle from '../images/yellow-sparkle.png';

const Footer = (props) => {
  return(
    	<footer className="footer-area bg-f">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h3>Delivery Information</h3>
              <p>Collection is free, delivery is £3/£4 dependant on area.</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3>Ordering hours</h3>
              <p><span className="text-color">Mon-Thu: </span>Closed</p>
              <p><span className="text-color">Fri-Sun :</span> 5:00 PM - 9:00 PM</p>
              <p><span className="text-color">Prebooking is necessary</span></p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3>Contact information</h3>
              <p className="lead">Swansea, Wales</p>
              <p className="lead"><a href="#">07726 904300</a></p>
              <p><a href="#"> sales@babitasspicedeli.co.uk</a></p>
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
