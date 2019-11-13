import React from 'react'
// import PropTypes from 'prop-types'
import Layout from 'shared/Layout'
import { Container, Row, Col } from 'react-bootstrap';
import AddressHead from './addressHead';
import { OuterBody } from 'sharedStyle';

const ContactUs = () => {
  return (
    <Layout>
        <OuterBody>
            <AddressHead firstTitle={"UK Address"} secondTitle={"US Address"} thirdTitle={"Contact Us"} />
            <Container className="page-content">
                <Row>
                    <Col  xs={6}>
                        <h2>Send Your Queries</h2>
                        <div>
                            Form Will be display here
                        </div>
                    </Col>
                    <Col  xs={6}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4964.843487944612!2d-0.140507!3d51.523824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b284b37f00d%3A0x58cc123f74118390!2sFitzroy%20St%2C%20Fitzrovia%2C%20London%2C%20UK!5e0!3m2!1sen!2sin!4v1573629556077!5m2!1sen!2sin" width="600" height="450" frameborder="0"  allowfullscreen="" title="address"/>
                    </Col>
                </Row>
            </Container>
        </OuterBody>
    </Layout>
  )
}

ContactUs.propTypes = {
}

export default ContactUs;
