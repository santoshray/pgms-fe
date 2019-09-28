import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CenterView from '../common/CenterView';
import Labels from '../../constants/Labels';
import RoomService from '../../services/RoomService';
import JSONUtil from '../../util/JSONUtil';
import { withRouter } from 'react-router-dom';
import Routes from '../../constants/Routes';
import LookUpSelect from '../common/LookUpSelect';
import FormLabels from '../../constants/FormLabels';
import withViewOnly from '../common/withViewOnly';
import RBACCondition from '../../constants/RBACCondition';

class RoomForm extends React.Component {
    constructor(props) {
        super(props);
        this.roomCreationview = this.roomCreationview.bind(this);
        this.handleRoomRegistration = this.handleRoomRegistration.bind(this);
        this.state={
            room:{}
        }
    }

    async componentDidMount(){
        if (!this.props.location.state)
            return;        
        const room=this.props.location.state.record;
        if (room.roomId) {
            const roomResponse=await RoomService.getRoom(room.roomId);
            debugger;
            this.setState({room:roomResponse.data});
        }
    }

    async handleRoomRegistration(event) {
        event.preventDefault();
        const data = JSONUtil.formToJson(event.target);
        const room = await RoomService.createRoom(data);
        this.props.history.push(Routes.ROOMS);
    }

    roomCreationview() {
        let hidden={
            display:'none'
        };
        const room=this.state.room;
        const roomLabels = FormLabels.Room;
        const isReadOnly=this.props.isReadOnly;
        if(!isReadOnly)
            hidden={};
        return (
            <CenterView>
                <Form onSubmit={this.handleRoomRegistration}>
                    <Form.Group controlId="createRoomNumber">
                        <Form.Label>{roomLabels.number}</Form.Label>
                        <Form.Control name="number" readOnly={isReadOnly} type="text" defaultValue={room.number} placeholder="Enter room number"/>
                    </Form.Group>
                    <Form.Group controlId="createRoomSharingCapacity">
                        <Form.Label>{roomLabels.sharingCapacity}</Form.Label>
                        <Form.Control name="sharingCapacity" readOnly={isReadOnly} type="text" defaultValue={room.middlesharingCapacityName} placeholder="Enter sharing capacity" />
                    </Form.Group>
                    <Form.Group controlId="createRoomOccupied">
                        <Form.Label>{roomLabels.occupied}</Form.Label>
                        <Form.Control name="occupied" readOnly={isReadOnly} type="text" defaultValue={room.occupied} placeholder="Enter number of occupied tenants" />
                    </Form.Group>
                    <LookUpSelect fieldLabel={roomLabels.tv} readOnly={isReadOnly} name="tv" lookUpType="YES_NO" value={room.tv}/>
                    <LookUpSelect fieldLabel={roomLabels.attachedBathroom} readOnly={isReadOnly} name="attachedBathroom" lookUpType="YES_NO" value={room.attachedBathroom}/>
                    <LookUpSelect fieldLabel={roomLabels.geyser} readOnly={isReadOnly} name="geyser" lookUpType="YES_NO" value={room.geyser}/>
                    <Form.Group controlId="createRoomBed">
                        <Form.Label>{roomLabels.bed}</Form.Label>
                        <Form.Control name="bed" readOnly={isReadOnly} type="text" defaultValue={room.bed} placeholder="Enter number of bed" />
                    </Form.Group>
                    <Form.Group controlId="createRoomMattress">
                        <Form.Label>{roomLabels.mattress}</Form.Label>
                        <Form.Control name="mattress" readOnly={isReadOnly} type="text" defaultValue={room.mattress} placeholder="Enter number of mattress" />
                    </Form.Group>
                    <Form.Group controlId="createRoomAlmirah">
                        <Form.Label>{roomLabels.almirah}</Form.Label>
                        <Form.Control name="almirah" readOnly={isReadOnly} type="text" defaultValue={room.almirah} placeholder="Enter number of almirah" />
                    </Form.Group>                    
                    <Button style={hidden} variant="primary" type="submit">
                        {Labels.CREATE_ROOM}
                    </Button>
                </Form>
            </CenterView>
        )
    }

    render() {
        return (
            <>
                {this.roomCreationview()}
            </>
        )
    }

}

export default withRouter(withViewOnly(RoomForm,!RBACCondition.Room.canEdit()));
