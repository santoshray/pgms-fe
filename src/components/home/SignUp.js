import React from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import PageView from '../common/PageView';
import Labels from '../../constants/Labels';
import JSONUtil from '../../util/JSONUtil';
import authService from '../../services/AuthService';
import generateMessages from '../messages/GenerateMessages';
import messages from '../messages/Messages';
import Address from '../common/Address';
import Name from '../common/Name';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.view = this.view.bind(this);
        this.signUpview = this.signUpview.bind(this);
        this.state = {
            successfulSignup: '',
        }
    }

    async handleSignUp(event) {
        event.preventDefault();
        const data = JSON.parse(JSONUtil.formToJson(event.target));
        const dataPg = {
            "name": data.pgName,
            "address": {
                "line1": data.line1,
                "line2": data.line2,
                "city": data.city,
                "state": data.state,
                "country": data.country
            }
        };
        const dataUser = {
            "pgId": "",
            "firstName": data.firstName,
            "middleName": data.middleName,
            "lastName": data.lastName,
            "email": data.email,
            "mobilePhoneNumber": data.mobilePhoneNumber,
            "password": data.password,
            "gender": data.gender,
            "maritalStatus": data.maritalStatus
        };
        try {
            const dataPgResponse = await authService.pgCreate(dataPg);
            dataUser.pgId = dataPgResponse.data.pgId;
            const signInResponse = await authService.signUp(dataUser);
            this.setState({ successfulSignup: 'S' });
        } catch (error) {
            this.setState({ successfulSignup: 'F' });
        }
    }

    signUpview() {
        return (
            <PageView>
                <Form onSubmit={this.handleSignUp}>
                    <Container id="pg-info" className="pgInfo">
                        <Card>
                            <Card.Header>PG Details</Card.Header>
                            <Card.Body>
                                <Form.Group controlId="signUpPgName">
                                    <Form.Label>PG Name</Form.Label>
                                    <Form.Control name="pgName" type="text" placeholder="Enter pg name" />
                                </Form.Group>
                                <Address />
                            </Card.Body>
                        </Card>
                    </Container>
                    <br />
                    <Container id="user-info">
                        <Card>
                            <Card.Header>Owner Details</Card.Header>
                            <Card.Body>
                                <Name />
                                <Form.Group controlId="signUpFirstEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="signUpMobilePhoneNumber">
                                    <Form.Label>Mobile number</Form.Label>
                                    <Form.Control name="mobilePhoneNumber" type="text" placeholder="Enter mobile number" />
                                </Form.Group>
                                <Form.Group controlId="signUpFirstPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="signUpFirstPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control name="confirmPassword" type="password" placeholder="Password" />
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Container>
                    <br />
                    <Container>
                        <Button variant="primary" type="submit">
                            {Labels.SIGNUP}
                        </Button>
                    </Container>
                </Form>
            </PageView>
        )
    }

    view() {
        let messageView;
        if (this.state.successfulSignup === 'S') {
            messageView = generateMessages.successMessage(messages.SUCCESSFUL_REGISTRATON);
            this.state.successfulSignup = '';
        }
        else if (this.state.successfulSignup === 'F') {
            messageView = generateMessages.errorMessage(messages.FAIL_REGISTRATON);
            this.state.successfulSignup = '';
        }
        else
            return this.signUpview();
        return messageView;
    }

    render() {
        return (
            <>
                <div>{this.view()}</div>
            </>
        );
    }
}

export default SignUp;