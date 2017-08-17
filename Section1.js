import React, { Component,  } from 'react';
import {Jumbotron, PageHeader, Table, Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap';

class Section1 extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="text-center">NASA</h1>
        </div>
        <div className="container">
          <Row>
            <Col xs={6} >
              <img className="center-block" src="http://texashillcountry.com/wp-content/uploads/Meteor-Shower.jpg" width="400" />
              <p className="center-block">As High as Honor. The rains of castamere. It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters. A dance of dragons. Forgive my manners. I do not see many ladies these days. Lucky for the ladies. A storm of swords. A Lannister always pays his debts. The tourney of Ashford Meadows.</p>
            </Col>
            <Col xs={6} >
              <img className="center-block" src="http://www.geekgirlauthority.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-23-at-9.36.42-PM.png" width="400" />
              <p className="center-block">As High as Honor. The rains of castamere. It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters. A dance of dragons. Forgive my manners. I do not see many ladies these days. Lucky for the ladies. A storm of swords. A Lannister always pays his debts. The tourney of Ashford Meadows.</p>
            </Col>
          </Row>
        </div>
      </div>
  );
 }
}

export default Section1;
