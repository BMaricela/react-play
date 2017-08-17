import React, { Component } from 'react';
import styles from './App.css';
import {Jumbotron, PageHeader, Table, Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap';
import Navs from './Navs.js';
import Jumbo from './Jumbo.js';
import Section1 from './Section1.js';
import neoData from './sample-neo.js';


class App extends Component {

  constructor(props){
  super(props)
  this.state = {
    iss_url: "http://api.open-notify.org/iss-now.json",
    iss_data: neoData
  }
  }


componentWillMount() {
  var self = this;

  fetch(`${this.state.iss_url}`).then(function(response) {
    return response.json();
  }).then(function(response) {
    self.setState({iss_data: response})
  });
}

componentDidMount() {
      var self = this;
  setInterval(function() {
      fetch(self.state.iss_url).then(function(response) {
        return response.json();
      }).then(function(response) {
        self.setState({iss_data: response})
      });
}, 5000);
}


  render() {
      const c = this.state.iss_data.iss_position
    return (



    <div>
      <div>
        <Navs />
      </div>
      <div>
        <Jumbo />
      </div>
      <div>
        <Section1 />
      </div>
      <div className="container">
      <Row>
        <Col xs={6}>
          <h2 className="center-block"> Space Station Longitude </h2>
          <h3 className="center-block">{c.longitude}</h3>
        </Col>
        <Col xs={6}>
          <h2 className="center-block"> Space Station Latitude </h2>
          <h3 className="center-block">{c.latitude}</h3>
        </Col>
      </Row>

      </div>
      <div id="meow">

      </div>

    </div>
    );
  }
}


export default App;
