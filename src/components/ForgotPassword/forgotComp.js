import React from 'react'
import AuthLogo from 'images/authlogo.svg';
import { Field, reduxForm, Form } from 'redux-form';
import { renderField } from 'utils/formUtils';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ForGotBox } from './style';

const ForGotComp = () => {
  return (
    <>
      	<img src={AuthLogo} alt="auth-logo" />
		<ForGotBox>
			<Form>
				<h1>FORGOT  PASSWORD</h1>
				<p>Enter Your Email Below to get a reset password link</p>
				<Field
					name="email"
					type="text"
					component={renderField}
					placeholder="Your Email Id"
				/>
				<Button className="outline-dark-btn">Submit</Button>
			</Form>
		</ForGotBox>
		<p>Remember your Password <Link to="/login">SIGN IN</Link></p>
    </>
  )
}

ForGotComp.propTypes = {
}

export default (reduxForm({
	form: 'forgot-password',
})(ForGotComp));
