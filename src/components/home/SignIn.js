import React from 'react';
import authService from '../../services/AuthService';
import authUtil from '../../util/AuthUtil';
import JSONUtil from '../../util/JSONUtil';
import Labels from '../../constants/Labels';
import { Form, Button } from 'react-bootstrap';
import Routes from '../../constants/Routes';
import { withRouter } from 'react-router-dom';
import CenterView from '../common/CenterView';
import RestStatus from '../../util/RestStatus';
import constants from '../../constants/Constants';
import generateMessages from '../messages/GenerateMessages';
import messages from '../messages/Messages';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.signInHandler = this.signInHandler.bind(this);
        this.view = this.view.bind(this);
        this.errorView = this.errorView.bind(this);
        this.state = {
            signInFailed: false
        }
    }

    async handleSignIn(event) {
        event.preventDefault();
        const data = JSONUtil.formToJson(event.target);
        try {
            const signInResponse = await authService.signIn(data);
            this.signInHandler(signInResponse);
        } catch (error) {
            this.setState({ signInFailed: true });
            authUtil.removeAccessToken(constants.ACCESS_TOKEN);
        }
    }

    signInHandler(signInResponse) {
        if (signInResponse.status != RestStatus.OK) {
            this.setState({ signInFailed: true });
            authUtil.removeAccessToken(constants.ACCESS_TOKEN);
        } else {
            this.setState({ signInFailed: false });
            authUtil.setAccessToken(signInResponse.data.accessToken);
            this.props.history.push(Routes.LANDING_PAGE);
        }
    }

    view() {
        let errorView;
        if (this.state.signInFailed)
            errorView = this.errorView();
        return (
            <>
                <div>{errorView}</div>
                <CenterView>
                    <Form onSubmit={this.handleSignIn}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>{Labels.EMAIL}</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>{Labels.PASSWORD}</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {Labels.SIGNIN}
                        </Button>
                    </Form>
                </CenterView>
            </>
        );
    }

    errorView() {
        return generateMessages.errorMessage(messages.INCORRECT_CREDENTIALS);
    }

    render() {
        return (
            <>
                {this.view()}
            </>
        );
    }

}

export default withRouter(SignIn);