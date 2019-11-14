import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { FirstDivSection, InnerDiv }  from './style';
import { renderField, renderSelectField } from 'utils/formUtils/';
const FirstSection = () => {
  return (
    <FirstDivSection>
      <Row>
        <Col md={{ span: 6 }}>
          <InnerDiv>
            <h2>Get a Specialised Doctor Consultancy</h2>
            <p>We are here to help you in finding the best doctor for your problems</p>
            <Button className="outline-dark-btn">Talk To A Doctor</Button>
            <Form>
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
              <Button>Search A Doctor</Button>
            </Form>
          </InnerDiv>
        </Col>
      </Row>      
    </FirstDivSection>
  )
}

FirstSection.propTypes = {
}

export default (reduxForm({
  form: 'searchDoctor',
})(FirstSection));