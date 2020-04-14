import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


import '../../styles/responsive-navbar.scss'

class ResponsiveNavbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (

			<div className="responsive-navbar">
				<Navbar collapseOnSelect expand='lg' bg='ma' variant='light'>
					<Navbar.Brand href='/'>Mehdi Ataei</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='mr-auto'>

							{
								(() => this.props.tabs.map((currentTab) => {
									return (

										<Nav.Link href={currentTab.link}>{currentTab.name}</Nav.Link>

									);

								}))()}
						</Nav>

						{/* <Nav.Link href='#deets'>More deets</Nav.Link>
							<Nav.Link eventKey={2} href='#memes'> Dank memes </Nav.Link> */}

					</Navbar.Collapse>
				</Navbar>
			</div>

		);
	}
}

export default ResponsiveNavbar;
