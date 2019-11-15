import React from 'react';
import PropTypes from 'prop-types';
import AuthLayout from 'shared/AuthLayout';
import SignUpComp from "./signUpComp";


const SignIn = () => {
  return (
    <AuthLayout>
      <SignUpComp />
    </AuthLayout>
  )
}

SignIn.propTypes = {
  getList: PropTypes.func
}

export default SignIn
