import React from 'react';
import {  Row, Col, Container } from 'react-bootstrap';
import Stopwatch from './../../images/stopwatch.svg';

const FourthSection = () => {
    return (
      <Container>
        <Row className="text-head-home">
            <Col xs={"12"} className="text-center mb-3">
                <h2 className="text-center text-heading">Why to Choose RocketDoctor App</h2>
            </Col>
        </Row>
        <Row className="why-bottom">
            <Col xs={4} className="text-center mb-3">
                <div className="stop-box">
                    <img src={Stopwatch} alt="ChatIcon" />
                    <div>
                    <p>Fastest Doctor Response</p>
                    </div>                    
                </div>    
            </Col>
            <Col  xs={4} className="text-center mb-3">
                <div className="stop-box">
                    <img src={Stopwatch} alt="ChatIcon" />
                    <div>
                        <p>Doctors 24/7</p>
                    </div>
                </div>
            </Col>
            <Col  xs={4} className="text-center mb-3">
                <div className="stop-box">
                    <img src={Stopwatch} alt="ChatIcon" />
                    <div>
                        <p>Experienced & Specialised</p>
                    </div>
                </div>
            </Col>
            <Col  xs={4} className="text-center mb-3">
                <div className="stop-box">
                    <img src={Stopwatch} alt="ChatIcon" />
                    <div>
                        <p>Private & Safe Consultation</p>
                    </div>
                </div>
            </Col>
            <Col  xs={4} className="text-center mb-3">
                <div className="stop-box">
                    <img src={Stopwatch} alt="ChatIcon" />
                    <div>
                        <p>Quality & Trust</p>
                    </div>
                </div>
            </Col>
            <Col  xs={4} className="text-center mb-3">
                <div className="stop-box">
                    <img src={Stopwatch} alt="ChatIcon" />
                    <div>
                        <p>Discounts on Labs & Medicine</p>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    )
}

FourthSection.propTypes = {
}

export default FourthSection;