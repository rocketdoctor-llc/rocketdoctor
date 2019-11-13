import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const TitleHead = (props) => {
    const { titleHead } = props;
    return <div className="title-wrp">
        <Container>
            <Row>
                <Col>
                    <h1 className="banner-title">{titleHead || "Title"}</h1>
                </Col>
            </Row>
        </Container>
    </div>
};

export default TitleHead;
