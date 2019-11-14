import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FooterDivSection } from './style';
import FooterLogo from '../../images/footerlogo.svg';

const Footer = (props) => (
  <>
    <FooterDivSection fluid>
      <Row>
        <Col md={{ span: 12 }} className="text-center">
          <Image src={FooterLogo} alt="" className="" />
          <div>
            The telemedicine services made available through Doctor On Demand are provided by licensed physicians practicing within a group of independently owned professional practices collectively known as “Doctor On Demand Professionals”. 
          </div>
        </Col>
        <Col md={{ span: 12}} className="">
          <ul className="footer-link-list">
            <li className="list-item"><a href="/about-us" className="footer-link">About us</a><a href="/careers" className="footer-link">Careers</a><a href="/contact-us" className="footer-link">Contact Us</a><a href="/code-of-conduct" className="footer-link">Code of Conduct</a>
            </li>
          </ul>
          <div>
            Form will be display here
          </div>
        </Col>
        <Col md={{ span: 12 }}>         
          <div>
            <p>© 2019 Rocketdoctor LLC, all rights reserved</p>
          </div>
        </Col>
      </Row>
    </FooterDivSection>
  </>
)

export default Footer
