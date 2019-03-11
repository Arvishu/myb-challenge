import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import UpComingEventsTab from'./components/UpComingEventsTab/UpComingEventsTab';
import  FriendsTab from './components/FriendsTab/FriendsTab';
import './App.css';
class App extends Component {
  render() {
    return (<div className="allElements">

     <ProfilePage />
     <BrowserRouter>
      <Container>

        <Row className='bottomLine'>
          <ul className='tabBar'>
            <li className='tabBar'>
              <NavLink to="/players/:id/upcoming" exact activeStyle={
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
              <NavLink to="/players/:id/friends" exact activeStyle={
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
        <Route path="/" exact strict component={UpComingEventsTab} />
        <Route path="/players/:id" exact strict component={UpComingEventsTab} />
        <Route path="/players/:id/upcoming" exact strict component={UpComingEventsTab} />
        <Route path="/players/:id/friends" exact strict component={FriendsTab} />

      </Container>
    </BrowserRouter>
     
      </div>
    );
  }
}

export default App;
