import React from 'react';
import Labels from '../../constants/Labels';
import { Form } from 'react-bootstrap';

const Address = (props) => (
    <>
        <Form.Group controlId="addressLine1">
            <Form.Label>{Labels.ADDRESS.LINE1}</Form.Label>
            <Form.Control name={props.line1?props.line1:'line1'} type="text" placeholder="Enter address line 1" />
        </Form.Group>
        <Form.Group controlId="addressLine2">
            <Form.Label>{Labels.ADDRESS.LINE2}</Form.Label>
            <Form.Control name={props.line2?props.line2:'line2'} type="text" placeholder="Enter address line 2"  />
        </Form.Group>
        <Form.Group controlId="addressCity">
            <Form.Label>{Labels.ADDRESS.CITY}</Form.Label>
            <Form.Control name={props.city?props.city:'city'} type="text" placeholder="Enter city" />
        </Form.Group>
        <Form.Group controlId="addressState">
            <Form.Label>{Labels.ADDRESS.STATE}</Form.Label>
            <Form.Control name={props.state?props.state:'state'} type="text" placeholder="Enter state" />
        </Form.Group>
        <Form.Group controlId="addressCountry">
            <Form.Label>{Labels.ADDRESS.COUNTRY}</Form.Label>
            <Form.Control name={props.country?props.country:'country'} type="text" placeholder="Enter country" />
        </Form.Group>
    </>
);

export default Address;