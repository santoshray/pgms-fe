import React from 'react';
import { Container , Button, Navbar } from 'react-bootstrap';
import Labels from '../../constants/Labels';


import './resident.css';

const ResidentFormNavBar = (props)=>{
    const r = props.highlight;
    const navTitles = [Labels.RESIDENT_FORMS.BASIC_INFO,
                       Labels.RESIDENT_FORMS.MAIL_ADDRESS,
                       Labels.RESIDENT_FORMS.PERMANENT_ADDRESS,
                       Labels.RESIDENT_FORMS.COMPANY_INFO,
                       Labels.RESIDENT_FORMS.IDENTITY_PROOF,
                       Labels.RESIDENT_FORMS.EMERGENCY_CONTACT,
                       Labels.RESIDENT_FORMS.PREFERENCES];

    let navElements = [];
    for (const [key,element] of navTitles.entries()){
        if ( element === r)
            navElements.push(<Button key={key} className={'btn-danger'} >{element}</Button>);
        else
            navElements.push(<Button key={key} className={'btn-light'} >{element}</Button>);
    }

    return (
        <>
        <Container> 
            <Navbar bg="light" variant="light">
                {navElements}
            </Navbar>
        </Container>
        </>
    )
  

};

export default ResidentFormNavBar;