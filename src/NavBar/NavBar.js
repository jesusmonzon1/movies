import React, { Component } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
  render(){
    return(
      <div>
        <div>
          <ul>
            <li><NavLink to="/"><FontAwesomeIcon icon={faFilm}/>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
      </div>
      
    )
  }
}

export default NavBar;