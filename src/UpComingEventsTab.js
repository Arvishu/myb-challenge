import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './UpComingEventsTab.css';

export default class UpComingEventsTab extends Component {
  render() {
    return (
      <div>
        <Container>
          <h6 className="tabTitle">Upcoming Events</h6>
          <Row>
            <Col className="eventsTab ">
            
              <p>in 3 months</p>
              <h3>SQUASH</h3>
              <p>Tuesday 29 January <br />at 20:09</p>
              
              <li>11 participants</li>
              
            </Col>
            <Col className="eventsTab">
            
            <p>in 6h6 months</p>
              <h3>CHISTERA</h3>
              <p>Monday 4 March <br />at 00:59</p>
              
              <li>4 participants</li>
              
            </Col>
            <Col className="eventsTab">
            
            <p>in 5 months</p>
              <h3>BOWLING</h3>
              <p>Tuesday 16 April <br />at 21:14</p>
             
              <li>6 participants</li>
              
            </Col>
          </Row>

          <Row>
          <Col className="eventsTab">
          
              <p>in 6 months</p>
              <h3>TENNIS</h3>
              <p>Friday 10 May <br />at 19:24</p>
             
              <li>1 participant</li>
              
            </Col>
            <Col className="eventsTab">
            
            <p>in 9 months</p>
              <h3>CANYONING</h3>
              <p>Tuesday 6 August <br />at 15:31</p>
              
              <li>4 participants</li>
              
            </Col>
            <Col className="eventsTab">
            
            <p>in 9 months</p>
              <h3>PAINTBALL</h3>
              <p>Thursday 8 August <br />at 13:38</p>
              
              <li>3 participants</li>
              
            </Col>
          </Row>

          <Row>
          <Col className="eventsTab">
          
              <p>in 9 months</p>
              <h3>BOWLING</h3>
              <p>Saturday 24 August <br />at 11:58</p>
             
              <li>10 participants</li>
              
            </Col>
            <Col className="eventsTab">
            
            <p>in 11 months</p>
              <h3>GOLF</h3>
              <p>Monday 7 October<br />at 13:09</p>
              
              <li>4 participants</li>
              
            </Col>
            <Col className="eventsTab hidden">
            
            </Col>
          </Row>

        </Container>
      </div>
    )
  }
}
