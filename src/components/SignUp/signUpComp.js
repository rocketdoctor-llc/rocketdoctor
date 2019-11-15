import React from 'react'
import { Field, reduxForm, Form } from 'redux-form';
import { renderField } from 'utils/formUtils';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthLogoComp from 'shared/AuthLayout/authLogo';
import { SignUpBox } from './style';

const SignUpComp = () => {
  return (
    <>
      	<AuthLogoComp />
      	<SignUpBox className="signUpForm">
			<Form>
				<h1>SIGN UP</h1>
				<Field
					name="username"
					type="text"
					component={renderField}
					placeholder="Enter Your Name"
				/>
				<Field
					name="password"
					type="text"
					component={renderField}
					placeholder="Your Email Id"
				/>
				<Field
					name="password"
					type="text"
					component={renderField}
					placeholder="Your Contact Number"
				/>
				<Button className="outline-dark-btn signUpBtn">Sign UP</Button>
			</Form>
			<p className="signUpLink">Not a Member, make a account here <Link to="/login" className="">Sign In</Link></p>
      	</SignUpBox>
    </>
  )
}

SignUpComp.propTypes = {
}

export default (reduxForm({
	form: 'singup',
})(SignUpComp));
