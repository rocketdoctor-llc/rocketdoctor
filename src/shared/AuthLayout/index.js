import React  from 'react';
import { AuthWrapper } from './style';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';
// import PropTypes from 'prop-types';

const AuthLayout = (props) => {
  return (
    <AuthWrapper className="align-items-center">
		<Container>
			<Row className="justify-content-center">
				<Col xs={{ span: "8"}}>
					<CardDeck>
						<Card>
							<Card.Body>
								{props.children}
							</Card.Body>
						</Card>
						<Card className="auth-sidebar"/>
					</CardDeck>
				</Col>
			</Row>
		</Container>
    </AuthWrapper>
  )
}


AuthLayout.propTypes = {
}

export default AuthLayout
