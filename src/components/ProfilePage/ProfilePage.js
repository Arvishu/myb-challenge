import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import './ProfilePage.css';

import UserPanel from '../UserPanel/UserPanel';



export default class ProfilePage extends Component {
  render() {
    return (
      <Container className="componentPosition">
        <Row className="rowSize">

          <Col-4><UserPanel/></Col-4>
          <Col-7></Col-7>

        </Row>
      </Container>




    );
  }
}