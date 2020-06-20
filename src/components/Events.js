import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export const Event = ({
    name = 'Event Name',
    desc = 'Event Description',
    month = 'January',
    day = '01',
    time = '12:00AM PST',
}) => {
    return (
        <Container id="event">
            <Row>
                <Col id="date" xs="3">
                    <h2>{month.slice(0, 3).toUpperCase()}</h2>
                    <h3>{day}</h3>
                </Col>
                <Col id="title" xs="9">
                    <h2>{name}</h2>
                    <p>{time}</p>
                </Col>
            </Row>
            <Row>
                <Col>{desc}</Col>
            </Row>
        </Container>
    );
};

const Events = ({ eventArray = [] }) => {
    return (
        <div className="Events">
            <h1>Events</h1>
            {eventArray.map((event) => (
                <Event
                    key={event.id}
                    name={event.name}
                    desc={event.desc}
                    month={event.month}
                    day={event.day}
                    time={event.time}
                />
            ))}
        </div>
    );
};

export default Events;
