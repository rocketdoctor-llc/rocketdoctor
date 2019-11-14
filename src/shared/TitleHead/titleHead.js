import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const TitleHead = (props) => {
    const { titleHead } = props;
    const titleHeadValue = React.useMemo(() => titleHeadName(titleHead), [titleHead]);
    return <div className="title-wrp">
        <Container>
            <Row>
                <Col>
                    <h1 className="banner-title">{titleHeadValue || "Title"}</h1>
                </Col>
            </Row>
        </Container>
    </div>
};

function titleHeadName(name) {
    return name;
  }
export default React.memo(TitleHead);
