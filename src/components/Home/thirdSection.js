import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ThirdDivSection } from './style';
import PartnerLogo from './../../images/partnerLogo.svg';


const ThirdSection = () => {
    return (
      <ThirdDivSection fluid>
        <Row className="text-head-home">
          <Col xs={"12"} className="text-center">
            <h2 className="text-center text-heading">Our Trusted Partners</h2>
          </Col>
        </Row>
        <Row className="partner-bottom">
          <Col xs={2} className="text-center">
            <img src={PartnerLogo} alt="PartnerLogo" />
          </Col>
          <Col xs={2} className="text-center">
            <img src={PartnerLogo} alt="PartnerLogo" />
          </Col>
          <Col xs={2} className="text-center">
            <img src={PartnerLogo} alt="PartnerLogo" />
          </Col>
          <Col xs={2} className="text-center">
            <img src={PartnerLogo} alt="PartnerLogo" />
          </Col>
          <Col xs={2} className="text-center">
            <img src={PartnerLogo} alt="PartnerLogo" />
          </Col>
          <Col xs={2} className="text-center">
            <img src={PartnerLogo} alt="PartnerLogo" />
          </Col>
        </Row>
      </ThirdDivSection>
    )
}

ThirdSection.propTypes = {
}

export default ThirdSection;