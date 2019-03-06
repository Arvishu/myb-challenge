import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './TabBar.css'

export default class TabBar extends Component {
  render() {
    return (
      <Container>
       
          <Row className='bottomLine'>
            <Col><p>Upcomings events</p></Col>
            <Col><p>Friends</p></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          
          </Row>
       


      </Container>
    )
  }
}
