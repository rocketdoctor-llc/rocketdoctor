import React from 'react';
import PropTypes from 'prop-types';
import AuthLayout from 'shared/AuthLayout';
import SignInComp from "./signInComp";


const SignIn = () => {
  return (
    <AuthLayout>
      <SignInComp />
    </AuthLayout>
  )
}

SignIn.propTypes = {
  getList: PropTypes.func
}

export default SignIn
