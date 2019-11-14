import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import { FifthDivSection } from './style';

const FifthSection = () => {
    return (
        <FifthDivSection fluid>
            <Row className="text-head-home">
                <Col xs={"12"} className="text-center mb-3">
                    <h2 className="text-center text-heading">Frequentaly Asked Questions</h2>
                </Col>
            </Row>
            <Row className="faq-home-bottom">
                <Col xs={4} className="text-center mb-3">
                    <div className="faq-home-box">
                        <h4>Why to Choose RocketDoctor App?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</p>
                        <a href="/">Read More</a>                
                    </div>    
                </Col>
                <Col  xs={4} className="text-center mb-3">
                    <div className="faq-home-box">
                        <h4>Why to Choose RocketDoctor App?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</p>
                        <a href="/">Read More</a>                
                    </div>  
                </Col>  
                <Col  xs={4} className="text-center mb-3">
                    <div className="faq-home-box">
                        <h4>Why to Choose RocketDoctor App?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</p>
                        <a href="/">Read More</a>                
                    </div>  
                </Col>
            </Row>
        </FifthDivSection>
    )
}

FifthSection.propTypes = {
}

export default FifthSection;