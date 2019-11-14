import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { SixDivSection }  from './style';
import Nphone from '../../images/nphone.svg';
import AppleConncect from '../../images/appleconnect.png';
import AndConnect from '../../images/andconnect.png';
import WebConnect from '../../images/webconnect.png';

const SixSection = () => {
  return (
    <SixDivSection>
      <Row>
        <Col md={{ span: 6 }}>
          <div>
            <img src={Nphone} alt="nphone" />
          </div>
        </Col>
        <Col md={{ span: 6 }}>
          <div>
            <h2>RocketDoctor App is available on Android and MAC Devices</h2>
            <p>Download now for most cost effective way to get world-class care</p>
            <img src={AppleConncect} alt="apple connect" />
            <img src={AndConnect} alt="android connect" />
            <img src={WebConnect} alt="web connect" />
          </div>
        </Col>
      </Row>      
    </SixDivSection>
  )
}

SixSection.propTypes = {
}

export default SixSection;