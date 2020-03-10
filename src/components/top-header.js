import React from 'react';
// images
import react_logo from '../react-logo.svg';
import php_logo from '../php-logo.png';
import mysql_logo from '../mysql-logo.png';
// layout
import Container from '@material-ui/core/Container';


export default function TopHeader () {
  return (
    <div>
      <Container maxWidth="sm">
        <div>
          <img src={react_logo} className="App-logo" alt="logo" />
          <img src={php_logo} className="App-logo" alt="logo" />
          <img src={mysql_logo} className="App-logo" alt="logo" />
        </div>
      </Container>
      <br /><br />
      <h3 >
      This is a simple REACT.js app with PHP/MySQL Backend
      </h3>
    </div>
  )
}
