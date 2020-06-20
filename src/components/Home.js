import React from 'react';
import { Container, Row, Col, Button, UncontrolledCarousel } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Profile } from './Roster';
import { SCREENSHOTS } from '../data/screenshotData';
import { Event } from './Events';

const Home = ({ rosterArray = [], eventArray = [] }) => {
    return (
        <div className="Home">
            <Container id="splash" className="mx-0 mt-0">
                <Row className="align-items-end">
                    <Col md={{ size: 6, offset: 3 }}>
                        <p className="text-light text-center">
                            We are a Destiny 2 clan of chill adults who
                            recognize that we must coordinate to maximize our
                            most precious resource, time.
                        </p>
                        <p className="text-light text-center">
                            Together Guardians strong.
                        </p>
                        <p className="text-light text-center">
                            We are Cherie's Angels.
                        </p>
                        <Link className="col-4 btn btn-lg" to="/apply">
                            <Button>Join</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <div className="Roster-Highlight">
                <Profile
                    name={rosterArray[0].name}
                    img={rosterArray[0].img}
                    desc={rosterArray[0].desc}
                />
            </div>
            <UncontrolledCarousel items={SCREENSHOTS} indicators={false} />
            <Event
                name={eventArray[0].name}
                desc={eventArray[0].desc}
                month={eventArray[0].month}
                day={eventArray[0].day}
                time={eventArray[0].time}
            />
        </div>
    );
};

export default Home;
