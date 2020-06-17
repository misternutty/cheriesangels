import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiscord,
    faTwitter,
    faReddit,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="site-footer">
            <Container>
                <Row>
                    <Col>
                        <h5>Social</h5>
                        <a
                            className="btn btn-social-icon"
                            href="https://discordapp.com/"
                        >
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                        <a
                            className="btn btn-social-icon"
                            href="http://twitter.com/"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a
                            className="btn btn-social-icon"
                            href="https://www.reddit.com/r/LowSodiumDestiny/"
                        >
                            <FontAwesomeIcon icon={faReddit} />
                        </a>
                    </Col>
                    <Col>
                        <Link to="/apply">
                            <Button>Join</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
