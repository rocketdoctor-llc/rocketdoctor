import React from 'react'
// import PropTypes from 'prop-types'
import Layout from 'shared/Layout'
import { Container, Row, Col } from 'react-bootstrap';
import TitleHead from 'shared/TitleHead/titleHead';
import { OuterBody } from 'sharedStyle';

const AboutUs = () => {
  return (
    <Layout>
        <OuterBody>
            <TitleHead titleHead={"About us"} />
            <Container className="page-content">
                <Row className="text-center">
                    <Col>
                        <h2>Company Information</h2>
                    </Col>
                </Row>
                <Row>
                    <Col  xs={6}>
                        <img src={"https://uploads-ssl.webflow.com/5dbaa0ecaf8471530748d881/5dc39cc0dc6c0c9acef6de1a_details1.jpg"} alt="" />
                    </Col>
                    <Col  xs={6}>
                        <img src={"https://uploads-ssl.webflow.com/5dbaa0ecaf8471530748d881/5dc39cee429c1a6618f7ad56_details2.jpg"} alt="" />
                    </Col>
                </Row>
            </Container>
        </OuterBody>
    </Layout>
  )
}

AboutUs.propTypes = {
}

export default AboutUs;
