import React from 'react'
import AuthLogo from 'images/authlogo.svg';
import { Field, reduxForm, Form } from 'redux-form';
import { renderField } from 'utils/formUtils';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SignInBox } from './style';
const SignIn = () => {
  return (
    <>
      <img src={AuthLogo} alt="auth-logo" />
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
				/>
				<div className="text-right">
					<Link to="/forgot-password">forgot password?</Link>
				</div>
				<Button className="outline-dark-btn">Join Now</Button>
			</Form>
			<p>Not a Member, make a account here <Link to="/registration">Sign UP</Link></p>
      	</SignInBox>
    </>
  )
}

SignIn.propTypes = {
}

export default (reduxForm({
	form: 'singin',
})(SignIn));
