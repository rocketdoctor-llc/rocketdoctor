import React from 'react'
import { Field, reduxForm, Form } from 'redux-form';
import { renderField } from 'utils/formUtils';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthLogoComp from 'shared/AuthLayout/authLogo';
import { SignInBox } from './style';

const SignIn = () => {
  return (
    <>
      <AuthLogoComp />
      <SignInBox>
			<Form>
				<h1>Login</h1>
				<Field
					name="username"
					type="text"
					component={renderField}
					placeholder="Username"
				/>
				<Field
					name="password"
					type="password"
					component={renderField}
					placeholder="Password"
					className="removeMargin"
				/>
				<div className="text-right">
					<Link to="/forgot-password" className="forgot-link">forgot password?</Link>
				</div>
				<Button className="outline-dark-btn">Join Now</Button>
			</Form>
			<p className="signUpLink">Not a Member, make a account here <Link to="/registration">Sign UP</Link></p>
      	</SignInBox>
    </>
  )
}

SignIn.propTypes = {
}

export default (reduxForm({
	form: 'singin',
})(SignIn));
