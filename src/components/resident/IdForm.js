import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CenterView from '../common/CenterView';
import ResidentFormNavBar from './ResidentFormNavBar';


import './resident.css';

const IdForm = (props)=>{
    const r = props.idinfo;
    //r.firstName.readonly = false;
    let options = [];
    for (const [,option] of r.type.options.entries())
        options.push(<option key={option} value={option}>{option}</option>);

    return (
        <>
        <ResidentFormNavBar highlight={props.highlight}/>
        <CenterView>
            <Form onSubmit={props.submitHandler} >
                <Form.Group controlId="IdFormType">
                    <Form.Label>{r.type.title}</Form.Label>
                    <Form.Control as="select" name={r.type.name}>{options}
                    </Form.Control>                
                </Form.Group>
                <Form.Group controlId="IdNumber">
                    <Form.Label>{r.number.title}</Form.Label>
                    <Form.Control readOnly={r.number.readonly} name={r.number.name} type="text" defaultValue={r.number.default} placeholder={r.number.placeholder}/>
                </Form.Group>
                <Form.Group controlId="IdFile">
                    <Form.Label>{r.file.title}</Form.Label>
                    <Form.Control readOnly={r.file.readonly} name={r.file.name} type="text" defaultValue={r.file.default} placeholder={r.file.placeholder} />
                </Form.Group>

                <Button  variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </CenterView>
        </>
    )
  

};

export default IdForm;