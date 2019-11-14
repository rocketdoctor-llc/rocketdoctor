import React from 'react';
import { Row, Col, Image, Button, Form, Container } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import FooterLogo from 'images/footerlogo.svg';
import { renderField } from 'utils/formUtils/';
import { FooterDivSection } from './style';

const Footer = (props) => (
  <>
    <FooterDivSection fluid>
      <Container>
        <Row>
          <Col md={{ span: 12 }} className="text-center">
            <Image src={FooterLogo} alt="" className="footerLogo" />
            <div className="sub-title">
              The telemedicine services made available through Doctor On Demand are provided by licensed physicians practicing within a group of independently owned professional practices collectively known as “Doctor On Demand Professionals”. 
            </div>
          </Col>
          <Col md={{ span: 12}} className="">
            <ul className="footer-link-list">
              <li className="list-item"><a href="/about-us" className="footer-link">About us</a></li>
              <li className="list-item"><a href="/careers" className="footer-link">Careers</a></li>
              <li className="list-item"><a href="/contact-us" className="footer-link">Contact Us</a></li>
              <li className="list-item"><a href="/code-of-conduct" className="footer-link">Code of Conduct</a></li>
            </ul>
            <Form className="d-flex flex-row subscribe-form">
              <Field
                name="location"
                type="select"
                component={renderField}
                placeholder="Enter Your Email"
              />
              <Button className="outline-dark-btn">Subscribe Newsletter</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Row className="copyright-section text-center">
        <Col md={{ span: 12 }}>         
          <div>
            <p>© 2019 Rocketdoctor LLC, all rights reserved</p>
          </div>
        </Col>
      </Row>
    </FooterDivSection>
  </>
)

export default (reduxForm({
  form: 'subscribe',
})(Footer));
