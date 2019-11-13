import React from 'react'
// import PropTypes from 'prop-types'
import Layout from 'shared/Layout'
import { Container, Row, Col } from 'react-bootstrap';
import TitleHead from 'shared/TitleHead/titleHead';
import { OuterBody } from 'sharedStyle';

const Team = () => {
  return (
    <Layout>
        <OuterBody>
            <TitleHead titleHead={"About us"} />
            <Container className="page-content">
                <Row className="text-center">
                    <Col>
                        <h2>Our Team</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <h3>C.K. TEEWARY</h3>
                        <div>
                            <p>Founder</p>
                        </div>                        
                    </Col>
                    <Col  xs={4}>
                        <h3>MANISH KUMAR</h3>
                        <div>
                            <p>Backend and Blockchain Developer</p>
                        </div>
                    </Col>
                    <Col  xs={4}>
                        <h3>DEEPALI KATARIA</h3>
                        <div>
                            <p>UX / UI Designer</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </OuterBody>
    </Layout>
  )
}

Team.propTypes = {
}

export default Team;
