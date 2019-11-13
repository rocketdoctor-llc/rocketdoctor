import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FirstDivSection, InnerDiv }  from './style';

const FirstSection = () => {
  return (
    <FirstDivSection>
      <Row>
        <Col md={{ span: 6 }}>
          <InnerDiv>
            <h2>Get a Specialised Doctor Consultancy</h2>
            <p>We are here to help you in finding the best doctor for your problems</p>
            <Button className="outline-dark-btn">Talk To A Doctor</Button>
          </InnerDiv>
        </Col>
      </Row>      
    </FirstDivSection>
  )
}

FirstSection.propTypes = {
}

export default FirstSection;