import React from 'react';
import Menu from '../components/Menu';
import Quote from '../components/Quote';

const MenuPage = () => {
  return(
    <React.Fragment>
      <div className="all-page-title page-menu-breadcrumb">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <h1>Menu</h1>
            </div>
          </div>
        </div>
      </div>
      <Menu />
      <Quote />
    </React.Fragment>
  )
}

export default MenuPage;
