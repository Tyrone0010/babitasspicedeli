import React from 'react';
import About from '../components/About';
import Menu from '../components/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return(
    <React.Fragment>
    	{/* Start about header */}
      <div className="all-page-title page-breadcrumb">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </div>
    	{/* End about header */}
      <About />
      <Menu />
      <div className="contact-imfo-box">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <i className="fa"><FontAwesomeIcon icon={faPhone} /></i>
              <div className="overflow-hidden">
                <h4>Phone</h4>
                <p className="lead">
                  +44 7726 904300
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <i className="fa"><FontAwesomeIcon icon={faEnvelope} /></i>
              <div className="overflow-hidden">
                <h4>Email</h4>
                <p className="lead">
                  sales@babitasspicedeli.co.uk
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <i className="fa"><FontAwesomeIcon icon={faMapMarker} /></i>
              <div className="overflow-hidden">
                <h4>Location</h4>
                <p className="lead">
                  Swansea, Wales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AboutPage;
