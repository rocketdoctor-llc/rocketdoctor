import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { interceptor } from 'utils/interceptor'
import HomeContainer from 'containers/Home/homeContainer'
import WhitePaper from 'containers/Whitepaper/whitePaperContainer';
import AboutUs from 'containers/AboutUs/aboutUsContainer';
import Team from 'containers/Team/teamContainer';
import Careers from 'containers/Careers/careersContainer';
import ContactUs from 'containers/ContactUs/contactUsContainer';
import SignIn from 'containers/SignIn/signInContainer';
import SignUp from 'containers/SignUp/signUpContainer.js';
import ForgotPassword from 'containers/ForgotPassword/forgotContainer';
import GlobalStyle from '../../globalStyle';

export default function App() {
  interceptor()
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomeContainer} />        
        <Route exact path="/whitepaper" component={WhitePaper} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/our-team" component={Team} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/registration" component={SignUp} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
      </Switch>
      <GlobalStyle />
    </Fragment>
  )
}
