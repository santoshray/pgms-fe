import React from 'react';
import {withRouter} from 'react-router-dom';
import HomeNavHeader from './home/HomeNavHeader';
import LandingPageNavHeader from './landing/LandingPageNavHeader';
import Routes from '../constants/Routes';

class AppHeader extends React.Component {
    constructor(props){
        super(props);
        this.routes={
            homeRoutes:[Routes.HOME,Routes.SIGNUP],
            landingPageRoutes:[Routes.LANDING_PAGE,Routes.USERS,
                Routes.CREATE_NEW_USER,Routes.CHANGE_PASSWORD,
                Routes.EXPENSES,Routes.ROOMS,Routes.CREATE_NEW_ROOM]
        };
    }

    render(){
        const currentRoute=this.props.location.pathname;

        if (this.routes.landingPageRoutes.indexOf(currentRoute) > -1)
            return <LandingPageNavHeader/>
        return <HomeNavHeader/>

    }
}

export default withRouter(AppHeader);
