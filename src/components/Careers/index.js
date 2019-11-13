import React from 'react'
// import PropTypes from 'prop-types'
import Layout from 'shared/Layout'
import { Container, Row, Col } from 'react-bootstrap';
import TitleHead from 'shared/TitleHead/titleHead';
import { OuterBody } from 'sharedStyle';

const Careers = () => {
  return (
    <Layout>
        <OuterBody>
            <TitleHead titleHead={"Careers"} />
            <Container className="page-content">
                <Row className="text-center">
                    <Col>
                        <h2>Careers</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <h3>Lawyer</h3>
                        <div>
                            <p>Areas of expertise:-</p>
                            <p>Company law, GDPR</p>
                        </div>                        
                    </Col>
                    <Col  xs={4}>
                        <h3>UI/UX Designer</h3>
                        <div>
                            <p>Areas of expertise:-</p>
                            <p>UI / UX Designing</p>
                        </div>
                    </Col>
                    <Col  xs={4}>
                        <h3>React Native Frontend Developer</h3>
                        <div>
                            <p>Areas of expertise:-</p>
                            <p>Framer X, HTML, React js, CSS</p>
                        </div>
                    </Col>
                    <Col  xs={4}>
                        <h3>React Native Frontend Developer</h3>
                        <div>
                            <p>Areas of expertise:-</p>
                            <p>Proofreading / grammar checking, Research & fact-checking</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </OuterBody>
    </Layout>
  )
}

Careers.propTypes = {
}

export default Careers;
