import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { SixDivSection }  from './style';
import Nphone from '../../images/nphone.svg';
import AppleConncect from '../../images/apple.png';
import AndConnect from '../../images/android-logo.png';
import WebConnect from '../../images/web-connect.png';

const SixSection = () => {
  return (
    <SixDivSection className="container SpaceBetween">
      <Row>
        <Col md={{ span: 6 }} xs={12}>
          <div>
            <img src={Nphone} alt="nphone" className="mobilePhone"/>
          </div>
        </Col>
        <Col md={{ span: 6 }} xs={12}>
          <div className="app-download">
            <h2>RocketDoctor App is available on Android and MAC Devices</h2>
            <p>Download now for most cost effective way to get world-class care</p>
            <div className="btnGroup">
              <Button className="store-btn">
                <img src={AppleConncect} alt="apple connect" />
                <p>
                  <span>Download</span>
                  <small>on apple Store</small>
                </p> 
              </Button>
              <Button className="store-btn">
                <img src={AndConnect} alt="android connect" />
                <p>
                  <span>Download</span>
                  <small>on play Store</small>
                </p> 
              </Button>
              <Button className="store-btn">
                <img src={WebConnect} alt="web connect" />
                <p>
                  <span>Web Connect</span>
                  <small>on your browser</small>
                </p> 
              </Button>
            </div>
          </div>
        </Col>
      </Row>      
    </SixDivSection>
  )
}

SixSection.propTypes = {
}

export default SixSection;