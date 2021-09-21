import React, { Fragment } from 'react';
import GameApiHome from './GameApiHome';
import './component/stylesCss/home.css'
import Footer from './component/Footer';

function Home() {
  return (
    <Fragment>
      <GameApiHome />
      <Footer />
    </Fragment>
  );
}
export default Home;
