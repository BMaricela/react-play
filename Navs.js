import React, { Component,  } from 'react';
import {Jumbotron, PageHeader, Table, Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap';

class Navs extends Component {
  render() {
    return (

      <div>
        <Navbar>
          <Nav className="nav-left">
            <NavItem eventKey={1} href="#"><img src="http://aaronengelhart.com/wp-content/uploads/2015/01/Nasa-logo.png" width="100px" height="100px"/></NavItem>
          </Nav>
          <Nav className="nav-right">
            <NavItem eventKey={2} href="#">About</NavItem>
            <NavItem eventKey={3} href="#">Contact</NavItem>
          </Nav>
        </Navbar>
      </div>
  );
 }
}

export default Navs;
