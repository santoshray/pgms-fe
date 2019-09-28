import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import LandingPage from '../landing/LandingPage';
import UserFrom from '../user/UserForm';
import Routes from '../../constants/Routes';
import AppHeader from '../AppHeader';
import ChangePasswordForm from '../landing/ChangePasswordForm';
import CreateExpenseForm from '../expense/CreateExpenseForm';
import Expenses from '../expense/Expenses';
import DemoTable from '../landing/DemoTable';
import UserList from '../user/UserList';
import RoomList from '../rooms/RoomList';
import RoomForm from '../rooms/RoomForm';
import CreateResidentForm from '../resident/CreateResidentForm';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <AppHeader/>
                <Route exact path='/' component={SignIn} />
                <Route path={Routes.SIGNUP} component={SignUp} />
                <Route path={Routes.LANDING_PAGE} component={LandingPage} />
                <Route path={Routes.USERS} component={UserList} />
                <Route path={Routes.CREATE_NEW_USER} component={UserFrom} />
                <Route path={Routes.ROOMS} component={RoomList} />
                <Route path={Routes.CREATE_NEW_ROOM} component={RoomForm} />
                <Route path={Routes.CHANGE_PASSWORD} component={ChangePasswordForm} />
                <Route path={Routes.CREATE_EXPENSE} component={CreateExpenseForm} />
                <Route path={Routes.EXPENSES} component={Expenses} />
                <Route path={Routes.RESIDENTS} component={CreateResidentForm} />

                <Route path="/table" component={DemoTable} />
            </Router>
        )
    }
};

export default Home;