import React, { Component, } from 'react';
import { Container, Row } from 'react-bootstrap';

import UserPanel from './UserPanel';
import TabBar from './TabBar';
import UpcomingEventsTab from './UpComingEventsTab';
import FriendsTab from './FriendsTab';







export default class ProfilePage extends Component {
  render() {
    return (<div>
      <Container>
        <Row>
       

       
          <TabBar>
          
          
          </TabBar>
          <UserPanel />
          <UpcomingEventsTab title="Upcoming events" active />
          <FriendsTab  title="Friends" />
         
          </Row>
          </Container>
        </div>
       
       
      
    );
  }
}