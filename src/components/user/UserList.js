import React from 'react';
import userService from '../../services/UserService';
import Routes from '../../constants/Routes';
import AdvancedTable from '../common/AdvancedTable';
import PageView from '../common/PageView';
import withViewOnly from '../common/withViewOnly';
import RBACCondition from '../../constants/RBACCondition';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.getUsers = this.getUsers.bind(this);
        this.renderTable=this.renderTable.bind(this);
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        this.getUsers();
    }

    async getUsers() {
        const usersResponse = await userService.getUsers();
        debugger;
        this.setState({ users: usersResponse.data });
    }

    renderTable(data) {
        const isReadOnly=this.props.isReadOnly;
        if(data.length<1)
            return;
        let table = {
            tableTitle:"User List",
            columns:['name', 'email'],
            createNewRoute:Routes.CREATE_NEW_USER,
            recordRoute:Routes.CREATE_NEW_USER,
            showRecordIcon:true,
            data:data
        };
        return <AdvancedTable table={table} isReadOnly={isReadOnly}/>;
    }
    render() {
        return (
            <PageView>
                {this.renderTable(this.state.users)}
            </PageView>
        )
    }
}

export default withViewOnly(UserList,!RBACCondition.User.canEdit());