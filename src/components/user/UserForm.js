import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CenterView from '../common/CenterView';
import Labels from '../../constants/Labels';
import UserService from '../../services/UserService';
import JSONUtil from '../../util/JSONUtil';
import { withRouter } from 'react-router-dom';
import withViewOnly from '../common/withViewOnly';
import Routes from '../../constants/Routes';
import LookUpSelect from '../common/LookUpSelect';
import FormLabels from '../../constants/FormLabels';
import RBACCondition from '../../constants/RBACCondition';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.userCreationview = this.userCreationview.bind(this);
        this.handleUserRegistration = this.handleUserRegistration.bind(this);
        this.readOnlyCondition=this.readOnlyCondition.bind(this);
        this.state={
            user:{},
            isReadOnly:false
        }
    }

    readOnlyCondition(){
        return true;
    }

    componentWillMount(){
        if (this.readOnlyCondition())
           this.setState({...this.state,isReadOnly:true}) 
    }

    async componentDidMount(){
        if (!this.props.location.state)
            return;
        const user=this.props.location.state.record;
        if (user.userId) {
            const userResponse=await UserService.getUser(user.userId);
            debugger;
            this.setState({user:userResponse.data});
        }
    }
    async handleUserRegistration(event) {
        event.preventDefault();
        const data = JSONUtil.formToJson(event.target);
        const user = await UserService.registerUser(data);
        this.props.history.push(Routes.USERS);
    }

    userCreationview() {
        let hidden={
            display:'none'
        };
        const user=this.state.user;
        const userLabels = FormLabels.User;
        const isReadOnly=this.props.isReadOnly;
        if(!isReadOnly)
            hidden={};
        return (
            <CenterView>
                <Form onSubmit={this.handleUserRegistration} >
                    <Form.Group controlId="createUserFirstName">
                        <Form.Label>{userLabels.firstName}</Form.Label>
                        <Form.Control readOnly={isReadOnly} name="firstName" type="text" defaultValue={user.firstName} placeholder="Enter first name"/>
                    </Form.Group>
                    <Form.Group controlId="createUserMiddleName">
                        <Form.Label>{userLabels.midddleName}</Form.Label>
                        <Form.Control readOnly={isReadOnly} name="middleName" type="text" defaultValue={user.middleName} placeholder="Enter middle name" />
                    </Form.Group>
                    <Form.Group controlId="createUserLastName">
                        <Form.Label>{userLabels.lastName}</Form.Label>
                        <Form.Control readOnly={isReadOnly} name="lastName" type="text" defaultValue={user.lastName} placeholder="Enter last name" />
                    </Form.Group>
                    <Form.Group controlId="createUserFirstEmail">
                        <Form.Label>{userLabels.email}</Form.Label>
                        <Form.Control readOnly={isReadOnly} name="email" type="email" defaultValue={user.email} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="createUserMobilePhoneNumber">
                        <Form.Label>{userLabels.mobilePhoneNumber}</Form.Label>
                        <Form.Control readOnly={isReadOnly} name="mobilePhoneNumber" type="text" defaultValue={user.mobilePhoneNumber} placeholder="Enter mobile number" />
                    </Form.Group>
                    <LookUpSelect fieldLabel={userLabels.role} readOnly={isReadOnly} name="roleCode" lookUpType="PG_ROLE" value={user.roleCode}/>
                    <Button style={hidden} variant="primary" type="submit">
                        {Labels.CREATE_USER}
                    </Button>
                </Form>
            </CenterView>
        )
    }

    render() {
        return (
            <>
                {this.userCreationview()}
            </>
        )
    }

}

export default withRouter(withViewOnly(UserForm,!RBACCondition.User.canEdit()));