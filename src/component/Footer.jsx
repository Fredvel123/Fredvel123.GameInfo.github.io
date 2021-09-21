import React from 'react';
import { Fragment } from 'react';
import './stylesCss/footer.css'

function Footer() {
  return (
    <Fragment>
      <footer>
        <h1>
          This site was created in{" "}
          <a href="https://rawg.io/apidocs" target="__blank">
            RAWG API
          </a>
        </h1>
        <h2>Design and Code by Freddy Velarde.</h2>
      </footer>
    </Fragment>
  ); 
}

export default Footer;
