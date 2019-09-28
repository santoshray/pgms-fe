import React from 'react';
import AuthUtil from '../util/AuthUtil';
import SignIn from './Home/SignIn';

const withAuthentication = (component) => {
    class withAuthentication extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                authToken: ""
            }
        }

        componentWillMount() {
            debugger;
            this.setState({ authToken: AuthUtil.getAccessToken() });
        }

        render() {
            debugger;
            if (!this.state.authToken)
                return (
                    <SignIn />
                );

            return (
                {component}
            )
        }
    }
}

export default withAuthentication;