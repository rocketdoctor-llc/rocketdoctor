import React from 'react'
import AuthLogo from 'images/authlogo.svg';
import { Field, reduxForm, Form } from 'redux-form';
import { renderField } from 'utils/formUtils';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SignUpBox } from './style';

const SignUpComp = () => {
  return (
    <>
      <img src={AuthLogo} alt="auth-logo" />
      	<SignUpBox>
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
				<Button className="outline-dark-btn">Sign UP</Button>
			</Form>
			<p>Not a Member, make a account here <Link to="/login" className="">Sign In</Link></p>
      	</SignUpBox>
    </>
  )
}

SignUpComp.propTypes = {
}

export default (reduxForm({
	form: 'singup',
})(SignUpComp));
