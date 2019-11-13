import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const AddressHead = (props) => {
    const { firstTitle, secondTitle, thirdTitle } = props;
    return <div className="title-wrp">
        <Container>
            <Row>
                <Col xs={4}>
                    <h2 className="address-title">{firstTitle || "Address"}</h2>
                </Col>
                <Col xs={4}>
                    <h2 className="address-title">{secondTitle || "Address"}</h2>
                </Col>
                <Col xs={4}>
                    <h2 className="address-title">{thirdTitle || "Address"}</h2>
                </Col>
            </Row>
        </Container>
    </div>
};

export default AddressHead;
