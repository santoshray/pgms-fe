import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CenterView from '../common/CenterView';
import ResidentFormNavBar from './ResidentFormNavBar';



import './resident.css';

const CompanyInfoForm = (props)=>{
    const r = props.address;
    //r.firstName.readonly = false;
    const companyInfo = {
        commpanyName:{
            name:"name",
            title:" Company / Institution Name",
            default:"",
            placeholder:" Enter Company or Institution Name",
            hide:false,
            readonly:false,
            comment:""             
        },
        phone:{
            name:"companyPhoneNumber",
            title:" Company / Institution Phone Number",
            default:"",
            placeholder:" Enter Company /Institution Phone number",
            hide:false,
            readonly:false,
            comment:""             
        }
    }
    const c = companyInfo;

    return (
        <>
        <ResidentFormNavBar highlight={props.highlight}/>
        <CenterView>
            <Form onSubmit={props.submitHandler} >
                <Form.Group controlId="CompanyNameId">
                    <Form.Label>{c.commpanyName.title} </Form.Label>
                    <Form.Control readOnly={c.commpanyName.readonly} name={c.commpanyName.name} type="text"
                     defaultValue={c.commpanyName.default} placeholder={c.commpanyName.placeholder}/>
                </Form.Group>
                <Form.Group controlId="CompanyPhoneNumberId">
                    <Form.Label>{c.phone.title} </Form.Label>
                    <Form.Control readOnly={c.phone.readonly} name={c.phone.name} type="text"
                     defaultValue={c.phone.default} placeholder={c.phone.placeholder}/>
                </Form.Group>

                <Form.Group controlId="Addressline1">
                    <Form.Label>{r.line1.title}</Form.Label>
                    <Form.Control readOnly={r.line1.readonly} name={r.line1.name} type="text" defaultValue={r.line1.default} placeholder={r.line1.placeholder}/>
                </Form.Group>
                <Form.Group controlId="Addressline2">
                    <Form.Label>{r.line2.title}</Form.Label>
                    <Form.Control readOnly={r.line2.readonly} name={r.line2.name} type="text" defaultValue={r.line2.default} placeholder={r.line2.placeholder} />
                </Form.Group>
                <Form.Group controlId="AddressCity">
                    <Form.Label>{r.city.title}</Form.Label>
                    <Form.Control readOnly={r.city.readonly} name={r.city.name} type="text" defaultValue={r.city.default} placeholder={r.city.placeholder} />
                </Form.Group>
                <Form.Group controlId="AddressState">
                    <Form.Label>{r.state.title}</Form.Label>
                    <Form.Control readOnly={r.state.readonly} name={r.state.name} type="text" defaultValue={r.state.default} placeholder={r.state.placeholder} />
                </Form.Group>
                <Form.Group controlId="AddressCountry">
                    <Form.Label>{r.country.title}</Form.Label>
                    <Form.Control readOnly= {r.country.readonly} name={r.country.name} type="text" defaultValue={r.country.default} placeholder={r.country.placeholder} />
                </Form.Group>

                <Button  variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </CenterView>
        </>
    )
  

};

export default CompanyInfoForm;