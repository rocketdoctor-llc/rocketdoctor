import React from 'react';
import PropTypes from 'prop-types';
import AuthLayout from 'shared/AuthLayout';
import ForgotComp from "./forgotComp";


const SignIn = () => {
  return (
    <AuthLayout>
      <ForgotComp />
    </AuthLayout>
  )
}

SignIn.propTypes = {
  getList: PropTypes.func
}

export default SignIn
