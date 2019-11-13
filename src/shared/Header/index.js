import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Container,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoImage from '../../images/logo.svg';
import { NavBarComp, OuterHeader } from './style' ;
const Header = (props) => {
  return (
	<OuterHeader>
		<Container fluid={false}>
			<Navbar>
				<Navbar.Brand href="/">
					<img src={LogoImage} alt=""/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="">
					<NavBarComp className="mr-auto">
						<Link className="nav-link" to="/">Home</Link>
						<Link className="nav-link" to="/whitepaper">Whitepaper</Link>
						<Link className="nav-link" to="/about-us">About Us</Link>
						<Link className="nav-link" to="/our-team">Team</Link>
						<Link className="nav-link" to="/careers">Careers</Link>
						<Link className="nav-link" to="/contact-us">Contact us</Link>
					</NavBarComp>
					<div className="text-right">
						<Button className="outline-btn">Sign In</Button>
						<Button className="outline-dark-btn">Join Now</Button>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	</OuterHeader>
  )
}

Header.propTypes = {
  showBackground: PropTypes.bool
}

export default Header
