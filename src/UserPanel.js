import React, { Component } from 'react';
import player from './images/player.jpeg';
import { Container, Row, Col } from 'react-bootstrap';
import './UserPanel.css'


export default class UserPanel extends Component {
   
   
    render() {
        return (
            <div>
                <Container className='userPosition'>
                    <Row>
                        <img className='player' src={player} alt="player" />
                    </Row>
                    <Row>
                        <h6>Yanis Thomas</h6>
                    </Row>
                    <Row>
                        <ul>
                            <li>Works at Renard, Breton and Lucas</li>
                            <li>Lives in West Mattéo</li>
                            <li>Last seen 4 month ago</li>
                        </ul>
                    </Row>
                    <Row className ='underlined'>
                        
                           <Col><h4 className='marginUnderlined'>102</h4><p className='smallEventsFriends'> events</p></Col>
                            <Col><h4 className='marginUnderlined'>83 </h4><p className='smallEventsFriends'>friends</p></Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
