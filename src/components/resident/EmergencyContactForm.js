import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CenterView from '../common/CenterView';
import ResidentFormNavBar from './ResidentFormNavBar';

import './resident.css';

const EmergencyContactForm = (props)=>{
    const r = props.basicInfo;
    const p = props.address;

    return (
        <>
        <ResidentFormNavBar highlight={props.highlight}/>
        <CenterView>
            <Form onSubmit={props.submitHandler} >
                <Form.Group controlId="basicInfoFirstName">
                    <Form.Label>{r.firstName.title}</Form.Label>
                    <Form.Control readOnly={r.firstName.readonly} name={r.firstName.name} type="text" defaultValue={r.firstName.default} placeholder={r.firstName.placeholder}/>
                </Form.Group>
                <Form.Group controlId="createUserMiddleName">
                    <Form.Label>{r.middleName.title}</Form.Label>
                    <Form.Control readOnly={r.middleName.readonly} name={r.middleName.name} type="text" defaultValue={r.middleName.default} placeholder={r.middleName.placeholder} />
                </Form.Group>
                <Form.Group controlId="createUserLastName">
                    <Form.Label>{r.lastName.title}</Form.Label>
                    <Form.Control readOnly={r.lastName.readonly} name={r.lastName.name} type="text" defaultValue={r.lastName.default} placeholder={r.lastName.placeholder} />
                </Form.Group>
                <Form.Group controlId="createEmail">
                    <Form.Label>{r.email.title}</Form.Label>
                    <Form.Control readOnly={false} name={r.email.name} type="email" defaultValue={r.email.default} placeholder={r.email.placeholder} />
                </Form.Group>
                <Form.Group controlId="createUserMobilePhoneNumber">
                    <Form.Label>{r.mobileNumber.title}</Form.Label>
                    <Form.Control readOnly= {r.mobileNumber.readonly} name={r.mobileNumber.name} type="text" defaultValue={r.mobileNumber.default} placeholder={r.mobileNumber.placeholder} />
                </Form.Group>

                <Form.Group controlId="Addressline1">
                    <Form.Label>{p.line1.title}</Form.Label>
                    <Form.Control readOnly={p.line1.readonly} name={p.line1.name} type="text" defaultValue={p.line1.default} placeholder={p.line1.placeholder}/>
                </Form.Group>
                <Form.Group controlId="Addressline2">
                    <Form.Label>{p.line2.title}</Form.Label>
                    <Form.Control readOnly={p.line2.readonly} name={p.line2.name} type="text" defaultValue={p.line2.default} placeholder={p.line2.placeholder} />
                </Form.Group>
                <Form.Group controlId="AddressCity">
                    <Form.Label>{p.city.title}</Form.Label>
                    <Form.Control readOnly={p.city.readonly} name={p.city.name} type="text" defaultValue={p.city.default} placeholder={p.city.placeholder} />
                </Form.Group>
                <Form.Group controlId="AddressState">
                    <Form.Label>{p.state.title}</Form.Label>
                    <Form.Control readOnly={p.state.readonly} name={p.state.name} type="text" defaultValue={p.state.default} placeholder={p.state.placeholder} />
                </Form.Group>
                <Form.Group controlId="AddressCountry">
                    <Form.Label>{p.country.title}</Form.Label>
                    <Form.Control readOnly= {p.country.readonly} name={p.country.name} type="text" defaultValue={p.country.default} placeholder={p.country.placeholder} />
                </Form.Group>


                <Button  variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </CenterView>
        </>
    )
  

};

export default EmergencyContactForm;