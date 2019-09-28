import React from 'react';
import Labels from '../../constants/Labels';
import { Nav, Navbar, Form } from 'react-bootstrap';
import SignUpLink from './SignUpLink';

class HomeNavHeader extends React.Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">{Labels.APP_NAME}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <SignUpLink/>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default HomeNavHeader;