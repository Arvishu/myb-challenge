import React, { Component } from 'react';
import Fetch from '../Fetch/Fetch';
import moment from 'moment';

import { Container, Row, Col } from 'react-bootstrap';
import './UserPanel.css';
export default class UserPanel extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        Fetch("/players/1").then(data => this.setState({ data: data }))

    }

    render() {

        const lastSeen = moment().diff(moment(new Date(this.state.data.last_seen)), 'months', true).toFixed();
        return (

            <div>

                <Container className='userPosition'>
                    <Row>
                        <img className='player' src={this.state.data.picture} alt="player1" />
                    </Row>
                    <Row>
                        <h6>{this.state.data.first_name} {this.state.data.last_name} </h6>
                    </Row>
                    <Row>
                        <ul>
                            <li>Works at {this.state.data.company}</li>

                            <li>Lives in {this.state.data.city_name}</li>
                            <li>Last seen {lastSeen} months ago</li>
                        </ul>
                    </Row>
                    <Row className='underlined'>

                        <Col><h4 className='marginUnderlined'>{this.state.data.total_events}</h4><p className='smallEventsFriends'> events</p></Col>
                        <Col><h4 className='marginUnderlined'>{this.state.data.total_friends}</h4><p className='smallEventsFriends'>friends</p></Col>

                    </Row>
                </Container>
            </div>
        )
    }
}



