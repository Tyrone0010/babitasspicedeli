import React, { useState } from 'react';
import slider1 from '../images/pexels-slider-1.jpg';
import slider2 from '../images/pexels-slider-2.jpg';
import slider3 from '../images/pexels-slider-3.jpg';
import Carousel  from 'react-bootstrap/Carousel';


const Slides = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index} 
      className="cover-slides" 
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img src={slider1} alt="" />
        <Carousel.Caption className="overlay-background">
          <h1><strong>Welcome To <br/> Babita's Spice Deli</strong></h1>
          <h5 className="m-b-40">Coming soon!</h5>
          <h6 className="m-b-40">Hopefully by 13th November 2020... Probably 20th November 2020</h6>
        </Carousel.Caption>      
      </Carousel.Item>
      <Carousel.Item >
        <img src={slider2} alt="" />
        <Carousel.Caption>
          <h1><strong>Welcome To <br/> Babita's Spice Deli</strong></h1>
          <h5 className="m-b-40">Coming soon!</h5>
          <h6 className="m-b-40">Hopefully by 13th November 2020... Probably 20th November 2020</h6>
        </Carousel.Caption>      
      </Carousel.Item>
      <Carousel.Item > 
        <img src={slider3} alt="" />
        <Carousel.Caption>
          <h1><strong>Welcome To <br/> Babita's Spice Deli</strong></h1>
          <h5 className="m-b-40">Coming soon!</h5>
          <h6 className="m-b-40">Hopefully by 13th November 2020... Probably 20th November 2020</h6>
        </Carousel.Caption>      
      </Carousel.Item>
    </Carousel>
    // <div id="slides" className="cover-slides">
    //   <ul className="slides-container">
    //     <li className="text-center">
    //       <img src={slider1} alt="" />
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-md-12">
    //             <h1 className="m-b-20"><strong>Welcome To <br/> Babita's Spice Deli</strong></h1>
    //             <h5 className="m-b-40">Coming soon!</h5>
    //             <h6 className="m-b-40">Hopefully by 13th November 2020... Probably 20th November 2020</h6>
    //           </div>
    //         </div>
    //       </div>
    //     </li>
    //     <li className="text-center">
    //       <img src={slider2} alt="" />
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-md-12">
    //             <h1 className="m-b-20"><strong>Welcome To <br/> Babita's Spice Deli</strong></h1>
    //             <h5 className="m-b-40">Coming soon!</h5>
    //             <h6 className="m-b-40">Hopefully by 13th November 2020... Probably 20th November 2020</h6>
    //           </div>
    //         </div>
    //       </div>
    //     </li>
    //     <li className="text-center">
    //       <img src={slider3} alt="" />
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-md-12">
    //             <h1 className="m-b-20"><strong>Welcome To <br /> Babita's Spice Deli</strong></h1>
    //             <h5 className="m-b-40">Coming soon!</h5>
    //             <h6 className="m-b-40">Hopefully by 13th November 2020... Probably 20th November 2020</h6>
    //           </div>
    //         </div>
    //       </div>
    //     </li>
    //   </ul>
    //   <div className="slides-navigation">
    //     <a href="#" className="next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
    //     <a href="#" className="prev"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
    //   </div>
    // </div>
  )
}

export default Slides;
