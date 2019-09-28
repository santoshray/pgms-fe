import React from 'react';
import LookUpService from '../../services/LookUpService';
import { Form } from 'react-bootstrap';

class LookUpSelect extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeValue=this.onChangeValue.bind(this);
        this.state = {
            lookUpValues: [],
            currentValue:''
        }
    }

    componentWillMount(){
        if(this.props.value)
            this.setState({...this.state,currentValue:this.props.value})
    }

    onChangeValue(e){
        this.setState({...this.state,currentValue:e.target.value})
    }

    async componentDidMount() {
        const { lookUpType } = this.props;
        const lookUpValues = await LookUpService.getValue(lookUpType);
        this.setState({ ...this.state,lookUpValues: lookUpValues.data });
    }

    render() {
        const { fieldLabel, name, readOnly } = this.props;
        let currentValue = this.state.currentValue || this.props.value;
        if (readOnly)
            return (
                <Form.Group controlId="select">
                    <Form.Label>{fieldLabel}</Form.Label>
                    <Form.Control plaintext readOnly defaultValue={currentValue} />
                </Form.Group>
            );
        if (currentValue)
            return (
                <Form.Group controlId="select">
                    <Form.Label>{fieldLabel}</Form.Label>
                    <Form.Control as="select" name={name} value={currentValue} onChange={this.onChangeValue}>
                        {this.state.lookUpValues.map(lookUpValue => {
                            return <option key={lookUpValue.lookUpId} value={lookUpValue.code}>{lookUpValue.value}</option>
                        })}
                    </Form.Control>
                </Form.Group>
            )
        else
            return (
                <Form.Group controlId="select">
                    <Form.Label>{fieldLabel}</Form.Label>
                    <Form.Control as="select" name={name}>
                        {this.state.lookUpValues.map(lookUpValue => {
                            return <option key={lookUpValue.lookUpId} value={lookUpValue.code}>{lookUpValue.value}</option>
                        })}
                    </Form.Control>
                </Form.Group>
            )
    }
}

export default LookUpSelect;