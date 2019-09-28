import React from 'react';
import RoomService from '../../services/RoomService';
import Routes from '../../constants/Routes';
import AdvancedTable from '../common/AdvancedTable';
import PageView from '../common/PageView';
import withViewOnly from '../common/withViewOnly';
import RBACCondition from '../../constants/RBACCondition';

class RoomList extends React.Component {
    constructor(props) {
        super(props);
        this.getRooms = this.getRooms.bind(this);
        this.renderTable=this.renderTable.bind(this);
        this.state = {
            rooms: []
        }
    }

    componentWillMount() {
        this.getRooms();
    }

    async getRooms() {
        const roomsResponse = await RoomService.getRooms();
        debugger;
        this.setState({ rooms: roomsResponse.data });
    }

    renderTable(data) {
        const isReadOnly=this.props.isReadOnly;
        if(data.length<1)
            return;
        let table = {
            tableTitle:"Room List",
            createNewRoute:Routes.CREATE_NEW_ROOM,
            recordRoute:Routes.CREATE_NEW_ROOM,
            showRecordIcon:true,
            data:data
        };
        return <AdvancedTable table={table} isReadOnly={isReadOnly}/>;
    }
    render() {
        return (
            <PageView>
                {this.renderTable(this.state.rooms)}
            </PageView>
        )
    }
}

export default withViewOnly(RoomList,!RBACCondition.Room.canEdit());