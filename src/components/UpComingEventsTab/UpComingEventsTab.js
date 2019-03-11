import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Fetch from '../Fetch/Fetch';
import './UpComingEventsTab.css';
import moment from 'moment';

export default class UpComingEventsTab extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    Fetch("/players/1/lastEvents")
      .then(data => this.setState({ data: data }))

  }

  render() {
    return (
      <div>
        <h6 className="tabTitle">Upcoming Events</h6>
        <div className="containerEvents">


          {this.state.data.map((event, index) => {
            let hour = moment(event.date).format('H:HH');
            let date = moment(event.date).format('dddd D MMMM');
            let inMonth = moment(new Date(event.date)).diff(moment(), 'months', true).toFixed();

            return (
              <div className="eventsTab" key={index}>
                <Container>
                  <Row>
                    <Col-1>
                      <p>in {inMonth} months</p>
                      <h3>{event.name}</h3>
                      <p>{date} <br />at {hour}</p>
                    </Col-1>
                  </Row>

                  <li>{event.participants.length} participants</li>
                </Container>
              </div>
            )
          })}
        </div>
      </div>


    );
  }
}
