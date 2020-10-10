import React, { useState, useEffect } from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import axios from 'axios';

// import App from '../../App'
import Gallery from '../Gallery/Gallery'
import About from '../About/About'
import Order from '../Order/Order'

const Menu = ({ open, ...props }) => {

  const [photos, setPhotos] = useState([]);
	useEffect(() => {
		axios
			.get(
				`https://api.unsplash.com/users/jakegrella/photos?client_id=L4591ozG82_pYS3W0BmQmQxfuhA8kKfhZS2P6PDl-Ak`
			)
			.then((res) => {
				setPhotos(res.data);
			});
  }, []);
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <Router>
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <Link to='/' tabIndex={tabIndex}>
          <span aria-hidden="true"></span>
          Home
        </Link>
        <Link to='/about' tabIndex={tabIndex}>
          <span aria-hidden="true"></span>
          About
        </Link>
        <Link to='/order' tabIndex={tabIndex}>
          <span aria-hidden="true"></span>
          Order
        </Link>
        <a href="https://www.instagram.com/jakegrella/" target='_blank' rel="noopener noreferrer" tabIndex={tabIndex}>
          <span aria-hidden="true"></span>
          ig
        </a>
        <a href="https://twitter.com/jakegrella" target='_blank' rel="noopener noreferrer" tabIndex={tabIndex}>
          <span aria-hidden="true"></span>
          tw
        </a>
      </StyledMenu>

      <Switch>
        <Route exact path="/">
          <Gallery photos={photos}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
      </Switch>
    </Router>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
