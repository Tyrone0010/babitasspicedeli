import React from 'react';
import aboutImage from '../images/about-img.jpg';

const About = (props) => {
  return(
    <div className="about-section-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={aboutImage} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <div className="inner-column">
              <h1>Welcome To <span>Babita's Spice Deli</span></h1>
              <h4>For those of you who do not know who we are .... let us introduce ourselves.</h4>
              <p>We are Babita and Rana the owners of Babita's Spice Deli.  Our small business began in 2015 and was born after our own search to find Indian street food dishes in Swansea that reminded us of our childhood dishes eaten growing us.</p>
              <p>Having searched far and wide we found that food was not true to form with key ingredients substituted for convenient alternatives.  Frustrated with what we discovered we created Babita's Spice Deli to evoke the memories and tastes of our Indian childhood growing up in the UK.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
