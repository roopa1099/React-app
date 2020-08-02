import React, { Component } from 'react';
import { Navbar, Nav,NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { browserHistory, Router, Route } from 'react-router';
export default class CustomNavbar extends Component {
 
  render() {
    const navbar = {backgroundColor: '#2E0F7F'};

    return (
        <div>
        <Navbar collapseOnSelect style={navbar}>
          
            <Navbar.Brand>
              <Link to="/">Social Media</Link>
            </Navbar.Brand>
            
         
          
            <Nav pullRight >
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About</NavItem>
            </Nav>
          
        </Navbar>
        
      </div>
         
     
    );
  }
}