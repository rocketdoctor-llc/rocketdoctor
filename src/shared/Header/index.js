import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Container,Button,Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoImage from '../../images/logo.svg';
import { NavBarComp, OuterHeader } from './style' ;
const Header = (props) => {
  return (
	<OuterHeader>
		<Container fluid={false}>
			<Navbar expand="lg">
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
						<Link to="/login" className="outline-btn btn btn-primary">Sign In</Link>
						<Link to="/registration" className="outline-dark-btn btn btn-primary">Join Now</Link>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</Container>
		{/* <Dropdown>
			<Dropdown.Toggle id="dropdown-custom-1"><span className="glyphicon glyphicon-align-justify"></span></Dropdown.Toggle>
			<Dropdown.Menu className="super-colors">
				<Dropdown.Item eventKey="1">Action</Dropdown.Item>
				<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
				<Dropdown.Item eventKey="3" active>
					Active Item
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown> */}
	</OuterHeader>
  )
}

Header.propTypes = {
  showBackground: PropTypes.bool
}

export default Header
