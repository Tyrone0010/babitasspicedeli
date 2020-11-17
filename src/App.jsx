import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './css/animate.css';
import './css/baguetteBox.min.css';
import './css/bootstrap.min.css';
import './css/classic.css';
import './css/classic.date.css';
import './css/classic.time.css';
import './css/custom.css';
import './css/responsive.css';
import './css/style.css';
import Routes from './routes';

const App = () => {
  return(
    <React.Fragment>
      <Header />
      <Routes />
      <Footer />
    </React.Fragment>
  )
}

export default App;
