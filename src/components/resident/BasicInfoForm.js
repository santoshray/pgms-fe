import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CenterView from '../common/CenterView';
import LookUpSelect from '../common/LookUpSelect';
import ResidentFormNavBar from './ResidentFormNavBar';

import './resident.css';

const basicInfoForm = (props)=>{
    const r = props.basicInfo;


    return (
        <>
            <ResidentFormNavBar highlight={props.highlight}/>
            <CenterView>
            <Form onSubmit={props.submitHandler} >
                <Form.Group controlId="basicInfoFirstName">
                    <Form.Label>{r.firstName.title}</Form.Label>
                    <Form.Control readOnly={r.firstName.readonly} name={r.firstName.name}  type="text" defaultValue={r.firstName.default} placeholder={r.firstName.placeholder}/>
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
                <div className="Invisible">
                <LookUpSelect type="hidden" fieldLabel={r.role.title} readOnly={r.role.readonly} name="roleCode" lookUpType="PG_ROLE" value="PG_RESIDENT"/>
                </div>
                <Button  variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </CenterView>
        </>
    )
  

};

export default basicInfoForm;