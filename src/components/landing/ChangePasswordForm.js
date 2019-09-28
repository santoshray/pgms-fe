import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CenterView from '../common/CenterView';
import Labels from '../../constants/Labels';
import UserService from '../../services/UserService';
import JSONUtil from '../../util/JSONUtil';
import { withRouter } from 'react-router-dom';
import routes from '../../constants/Routes';
import AuthUtil from '../../util/AuthUtil';
import authService from '../../services/AuthService';

class ChangePasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.changePasswordview = this.changePasswordview.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    async handleChangePassword(event) {
        event.preventDefault();
        let data = JSONUtil.formToJson(event.target);
        data=JSON.parse(data);
        data.userId=AuthUtil.getUserId()
        data=JSON.stringify(data);
        const user = await UserService.updateUser(data);
        authService.signOut();
        this.props.history.push(routes.HOME);
    }

    changePasswordview() {
        return (
            <CenterView>
                <Form onSubmit={this.handleChangePassword}>
                    <Form.Group controlId="signUpFirstPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="signUpFirstPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name="confirmPassword" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {Labels.CHANGE_PASSWORD}
                    </Button>
                </Form>
            </CenterView>
        )
    }

    render() {
        return (
            <>
                {this.changePasswordview()}
            </>
        )
    }

}

export default withRouter(ChangePasswordForm);