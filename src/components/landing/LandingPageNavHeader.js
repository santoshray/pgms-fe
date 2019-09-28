import React from 'react';
import Labels from '../../constants/Labels';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import authService from '../../services/AuthService';
import routes from '../../constants/Routes';
import { withRouter } from 'react-router-dom';

class LandingPageNavHeader extends React.Component {

    constructor(props) {
        super(props);
        this.handleSignOut = this.handleSignOut.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
    }

    handleSignOut() {
        authService.signOut();
        this.props.history.push(routes.HOME);
    }

    handleRouteChange(e,route){
        this.props.history.push(route);
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">{Labels.APP_NAME}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav.Link onClick={(e)=>this.handleRouteChange(e,routes.ROOMS)}>{Labels.ROOM_LIST}</Nav.Link>
                <Nav.Link onClick={(e)=>this.handleRouteChange(e,routes.USERS)}>{Labels.USER_LIST}</Nav.Link>
                <Nav.Link onClick={(e)=>this.handleRouteChange(e,routes.EXPENSES)}>{Labels.EXPENSE_LIST}</Nav.Link>
                <Nav.Link onClick={(e)=>this.handleRouteChange(e,'/table')}>Table</Nav.Link>
                <Nav.Link onClick={(e)=>this.handleRouteChange(e,routes.RESIDENTS)}>RESIDENT</Nav.Link>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <NavDropdown title={Labels.SETTINGS} id="basic-nav-dropdown">
                        <NavDropdown.Item >{Labels.MYACCCOUNT}</NavDropdown.Item>
                        <NavDropdown.Item onClick={(e)=>this.handleRouteChange(e,routes.CHANGE_PASSWORD)}>{Labels.CHANGE_PASSWORD}</NavDropdown.Item>
                        <NavDropdown.Item onClick={this.handleSignOut}>{Labels.SIGNOUT}</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(LandingPageNavHeader);