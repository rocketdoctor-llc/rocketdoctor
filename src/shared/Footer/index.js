import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

const Footer = (props) => (
  <>
    <Container>
      <Row>
        <Col md={{ span: 3 }}>
          <Image src="https://uploads-ssl.webflow.com/5dbaa0ecaf8471530748d881/5dc5354dd422e8282621ff4c_logo.png" alt="" className="" thumbnail />
          <div>
            <p>© 2019 Rocketdoctor LLC, all rights reserved</p>
          </div>
        </Col>
        <Col md={{ span: 9 }}>
          <ul className="footer-link-list">
            <li className="list-item"><a href="/about-us" className="footer-link">About us</a><a href="/careers" className="footer-link">Careers</a><a href="/contact-us" className="footer-link">Contact Us</a><a href="/code-of-conduct" className="footer-link">Code of Conduct</a>
            </li>
          </ul>
          <ul className="footer-link-list">
            <li className="list-item"><a href="/about-us" className="footer-link">About us</a><a href="/careers" className="footer-link">Careers</a><a href="/contact-us" className="footer-link">Contact Us</a><a href="/code-of-conduct" className="footer-link">Code of Conduct</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </>
)

export default Footer
