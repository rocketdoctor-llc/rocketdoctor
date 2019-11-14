import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';
import { FirstDivSection, InnerDiv }  from './style';
import { renderField, renderSelectField } from 'utils/formUtils/';
const FirstSection = () => {
  return (
    <FirstDivSection>
      <Container>
        <Row className="removeMargin">
          <Col md={{ span: 6 }} xs="12">
            <InnerDiv>
              <h2>Get a Specialised Doctor Consultancy</h2>
              <p>We are here to help you in finding the best doctor for your problems</p>
              <Button className="outline-dark-btn">Talk To A Doctor</Button>
            </InnerDiv>
          </Col>
          <Col md="6" xs="12">
            <Form className="searchForm">
              <Field
                name="location"
                type="select"
                component={renderField}
                placeholder="Location"
              />
              <Field
                name="waitTime"
                type="selectDoctor"
                component={renderSelectField}
                placeholder="Select Doctor"
              />
              <Field
                name="waitTime"
                type="selectProblem"
                component={renderSelectField}
                placeholder="Select Problem"
              />
              <div className="text-center btn-section">
                <Button className="outline-dark-btn">Search A Doctor</Button>
              </div>
              </Form>
          </Col>
        </Row>   
      </Container>   
    </FirstDivSection>
  )
}

FirstSection.propTypes = {
}

export default (reduxForm({
  form: 'searchDoctor',
})(FirstSection));