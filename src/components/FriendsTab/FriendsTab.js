import React, { Component } from 'react';
import Fetch from '../Fetch/Fetch';
import { Container, Row } from 'react-bootstrap';
import './FriendsTab.css';

export default class FriendsTab extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    Fetch("/players/1/friends")
      .then(data => this.setState({ data: data }))

  }

  render() {
    return (
      <div >
        <h6 className="tabTitle">Friends</h6>
        <div className="containerFriends">
        {this.state.data.map((friend, index) => {

          return (
            <div className="friendTab" key={index}>
              <Container>
                <Row>
                  <Col-4>
                    <img className="friend" src={friend.picture} alt={friend.last_name} />
                  </Col-4>

                  <Col-8 >
                    <h6>{friend.first_name} {friend.last_name}</h6>
                    <li>{friend.total_events} events</li>
                    <li>{friend.total_friends} friends</li>
                  </Col-8>
                </Row>
              </Container>
              </div>
              )
            }
            )}
      
      </div>
      </div>
          )
        }
}
