import React from 'react';
import { menuItems } from '../data/menu';

const Menu = (props) => {
  return(
    <div className="menu-box">
      <div className="container">
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="special-menu text-center">
              <div className="button-group filter-button-group">
                <button className="active" data-filter="*">All</button>
                <button data-filter=".snacks">Starters</button>
                <button data-filter=".dinner">Dinner</button>
              </div>
            </div>
          </div>
        </div> */}
          
        <div className="row special-list">
        {
          menuItems.map( item => 
            <div key={item.id} className="col-lg-4 col-md-6 special-grid snacks">
              <div className="gallery-single fix">
                <img src={item.image} className="img-fluid" alt={`Image of ${item.heading}`} />
                <div className="why-text">
                  <h4>{item.heading}</h4>
                  <p>{item.description}</p>
                  <h5>{`£${item.price}`}</h5>
                  <i>{item.allergyInfo}</i>
                </div>
              </div>
            </div>
          )
        }
        </div>
      </div>
    </div>	
  )
}

export default Menu;
