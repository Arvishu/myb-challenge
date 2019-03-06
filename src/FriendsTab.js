import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import user1 from './images/user1.png';
import user2 from './images/user2.png';
import user3 from './images/user3.png';
import user4 from './images/user4.png';
import user5 from './images/user5.png';
import user6 from './images/user6.png';
import user7 from './images/user7.png';
import user8 from './images/user8.png';
import user9 from './images/user9.png';
import user10 from './images/user10.png';
import user11 from './images/user11.png';
import user12 from './images/user1.png';

import './FriendsTab.css';

export default class FriendsTab extends Component {
  render() {
    return (
      <div>
        <Container>
          <h6>Friends</h6>
          <Row>
            <Col className='friendTab'>
              <Row>
                <Col-4><img className="friend" src={user1} alt="user1" />
                </Col-4>
                <Col-6  className="marginFriendTab"><h6>Maeva Chevalier</h6>
                  <li> 340 events</li>
                  <li> 38 friends</li>
                </Col-6>
              </Row>


            </Col>
            <Col className='friendTab'>
              <Row>
                <Col-4><img className="friend" src={user2} alt="user2" />
                </Col-4>
                <Col-6><h6>Quentin Lefevre</h6>
                  <li> 246 events</li>
                  <li> 33 friends</li>
                </Col-6>
              </Row>
            </Col>
            <Col className='friendTab'>
              <Row>
                <Col-4><img className="friend" src={user3} alt="user3" />
                </Col-4>
                <Col-6><h6>Norbert Hubert</h6>
                  <li> 186 events</li>
                  <li> 4 friends</li>
                </Col-6>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className='friendTab'>
              <Row>
                <Col-4><img className="friend" src={user4} alt="user4" />
                </Col-4>
                <Col-6><h6>Paulin Noel</h6>
                  <li> 240 events</li>
                  <li> 182 friends</li>
                </Col-6>
              </Row>
            </Col>
            <Col className='friendTab'>
              <Row>
                <Col-4><img className="friend" src={user5} alt="user5" />
                </Col-4>
                <Col-6><h6>Théo Julien</h6>
                  <li> 299 events</li>
                  <li> 171 friends</li>
                </Col-6>
              </Row>
            </Col>
            <Col className='friendTab'>
              <Row>
                <Col-4><img className="friend" src={user6} alt="user6" />
                </Col-4>
                <Col-6><h6>Maëlle Guillaume</h6>
                  <li> 38 events</li>
                  <li> 148 friends</li>
                </Col-6>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className='friendTab'>
              <Row>
                <Col-4><img className="friend" src={user7} alt="user7" />
                </Col-4>
                <Col-6><h6>Joe Martin</h6>
                  <li> 411 events</li>
                  <li> 160 friends</li>
                </Col-6>
              </Row>
            </Col>
            <Col className='friendTab'>
              <Row>
                <Col-4><img className="friend" src={user8} alt="user8" />
                </Col-4>
                <Col-6><h6>Bob Robin</h6>
                  <li> 363 events</li>
                  <li> 94 friends</li>
                </Col-6>
              </Row>
            </Col>
            <Col className='friendTab'>
              <Row>
                <Col-4><img className="friend" src={user9} alt="user9" />
                </Col-4>
                <Col-6><h6>Sacha Garcia</h6>
                  <li> 131 events</li>
                  <li> 78 friends</li>
                </Col-6>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className='friendTab'>
              <Row>
                <Col-4><img className="friend" src={user10} alt="user10" />
                </Col-4>
                <Col-6><h6>Nicolas Giraud</h6>
                  <li> 362 events</li>
                  <li> 166 friends</li>
                </Col-6>
              </Row>
            </Col>
            <Col className='friendTab'>
              <Row>
                <Col-4><img className="friend" src={user11} alt="user11" />
                </Col-4>
                <Col-6><h6>Mattéo Leclerc</h6>
                  <li> 340 events</li>
                  <li> 38 friends</li>
                </Col-6>
              </Row>
            </Col>
            <Col className='friendTab'>
              <Row>
                <Col-4><img className="friend" src={user12} alt="user12" />
                </Col-4>
                <Col-6><h6>Louis Mercier</h6>
                  <li> 340 events</li>
                  <li> 38 friends</li>
                </Col-6>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
