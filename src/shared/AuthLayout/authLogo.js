import React from 'react';
import { Link } from 'react-router-dom';
import AuthLogo from 'images/authlogo.svg';

const AuthLogoComp = () => {
    return <Link to="/"><img src={AuthLogo} alt="auth-logo" /></Link>;
}

export default AuthLogoComp;