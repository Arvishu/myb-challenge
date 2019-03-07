import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import './TabBar.css'
import UpComingEventsTab from '../UpComingEventsTab/UpComingEventsTab';
import FriendsTab from '../FriendsTab/FriendsTab';

export default class TabBar extends Component {
  render() {
    return (<BrowserRouter>
      <Container>

        <Row className='bottomLine'>
          <ul className='tabBar'>
            <li className='tabBar'>
              <NavLink to="/UpcomingsEvents" exact activeStyle={
                {
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: '1.5vw',
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'grey',
                  paddingBottom: '0.4vw',
                }

              }>Upcomings event</NavLink></li>
            <li className='tabBar'>
              <NavLink to="/FriendsTab" exact activeStyle={
                {
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: '1.5vw',
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'grey',
                  paddingBottom: '0.4vw',


                }
              }>Friends</NavLink>
            </li>
          </ul>

        </Row>

        <Route path="/UpcomingsEvents" exact strict component={UpComingEventsTab} />
        <Route path="/FriendsTab" exact strict component={FriendsTab} />

      </Container>
    </BrowserRouter>
    )
  }
}
