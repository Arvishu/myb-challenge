import React, { Component } from 'react';
import Fetch from '../Fetch/Fetch';

import { Container, Row, Col } from 'react-bootstrap';
import './UserPanel.css';

const samplePlayer = {
    id: 1,
  first_name: "",
  last_name: "Le gall",
  company: "Martin, Fournier and Dumont",
  city_name: "Andreberg",
  last_seen: "2018-10-08T12:23:13.687Z",
  picture: "https://s3.amazonaws.com/uifaces/faces/twitter/rawdiggie/128.jpg",
  total_events: 93,
  total_friends: 83
};

export default class UserPanel extends Component {
    constructor (props) {
        super (props);
        this.state = {
          player: samplePlayer
         
        }
       
    };
    
  
    render() {
        return (
            <div>
                <Container className='userPosition'>
                    <Row>
                        <img className='player' src={this.state.player.picture} alt="player" />
                    </Row>
                    <Row>
                        <h6>{this.state.player.first_name} {this.state.player.last_name} </h6>
                    </Row>
                    <Row>
                        <ul>
                            <li>Works at {this.state.player.company}</li>
                            <Fetch/>
                            <li>Lives in {this.state.player.city_name}</li>
                            <li>Last seen {this.state.player.last_seen}</li>
                        </ul>
                    </Row>
                    <Row className='underlined'>

                        <Col><h4 className='marginUnderlined'>{this.state.player.total_events}</h4><p className='smallEventsFriends'> events</p></Col>
                        <Col><h4 className='marginUnderlined'>{this.state.player.total_friends}</h4><p className='smallEventsFriends'>friends</p></Col>

                    </Row>
                </Container>
            </div>
        )
    }
}
