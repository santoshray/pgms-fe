import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CenterView from '../common/CenterView';
import ResidentFormNavBar from './ResidentFormNavBar';


import './resident.css';

const PreferenceForm = (props)=>{
    const r = props.prefs;
    //r.firstName.readonly = false;
    let foodoptions = [];
    for (const [,option] of r.foodservice.options.entries())
        foodoptions.push(<option key={option} value={option}>{option}</option>);
    let paperoptions =[];
    for (const [,option] of r.newspaper.options.entries())
        paperoptions.push(<option key={option} value={option}>{option}</option>);


    return (
        <>
        <ResidentFormNavBar highlight={props.highlight}/>
        <CenterView>
            <Form onSubmit={props.submitHandler} >
                <Form.Group controlId="FoodServiceId">
                    <Form.Label>{r.foodservice.title}</Form.Label>
                    <Form.Control as="select" name={r.foodservice.name}>{foodoptions}
                    </Form.Control>                
                </Form.Group>
                <Form.Group controlId="NewsPaperId">
                    <Form.Label>{r.newspaper.title}</Form.Label>
                    <Form.Control as="select"  name={r.newspaper.name}>{paperoptions}
                    </Form.Control> 
                </Form.Group>

                <Button  variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </CenterView>
        </>
    )
  

};

export default PreferenceForm;