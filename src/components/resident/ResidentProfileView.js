import React from 'react';
import { Container, Button } from 'react-bootstrap';
import CenterView from '../common/CenterView';
import ResidentFormNavBar from './ResidentFormNavBar';
import ResidentFormConfig from './ResidentFormConfig';

import Card from 'react-bootstrap/Card';


import './resident.css';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

const ResidentProfileView = (props)=>{

    const r = props.resident;
    
    return (
        <>
        <Container>
            <Card border="danger">
                <Card.Header> <b>Personal Information</b></Card.Header>
                <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    <div>
                        <Button className={"btn-danger"}>Name </Button> 
                        <Button className={"btn-light"}>{r.firstName} {r.middleName} {r.lastName} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>Email </Button> 
                        <Button className={"btn-light"}>{r.email} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>Gender  </Button> 
                        <Button className={"btn-light"}>{r.gender} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>Marital Status  </Button> 
                        <Button className={"btn-light"}>{r.maritalStatus} </Button> 
                    </div>
                    
                    <div>
                        <Button className={"btn-danger"}>Mobile Number  </Button> 
                        <Button className={"btn-light"}>{r.mobilePhoneNumber} </Button> 
                    </div>

                </Card.Text>
                </Card.Body>
            </Card>
            <div className={'row'}>
            <div className={'col-md-6'}>
            <Card border="danger">
                <Card.Header> <b>Mailing Address</b></Card.Header>
                <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                <div>
                        <Button className={"btn-danger"}>Address line1 </Button> 
                        <Button className={"btn-light"}>{r.mailAddress.line1} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>Address line2 </Button> 
                        <Button className={"btn-light"}>{r.mailAddress.line2} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>City </Button> 
                        <Button className={"btn-light"}>{r.mailAddress.city} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>State </Button> 
                        <Button className={"btn-light"}>{r.mailAddress.state} </Button> 
                    </div>
                    
                    <div>
                        <Button className={"btn-danger"}>Country </Button> 
                        <Button className={"btn-light"}>{r.mailAddress.country} </Button> 
                    </div>

                </Card.Text>
                </Card.Body>
            </Card>
           </div>
           <div className={'col-md-6'}>
            <Card border="danger">
                <Card.Header> <b>Permanent Address</b></Card.Header>
                <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    <div>
                        <Button className={"btn-danger"}>Address line1 </Button> 
                        <Button className={"btn-light"}>{r.permanentAddress.line1} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>Address line2 </Button> 
                        <Button className={"btn-light"}>{r.permanentAddress.line2} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>City </Button> 
                        <Button className={"btn-light"}>{r.permanentAddress.city} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>State </Button> 
                        <Button className={"btn-light"}>{r.permanentAddress.state} </Button> 
                    </div>
                    
                    <div>
                        <Button className={"btn-danger"}>Country </Button> 
                        <Button className={"btn-light"}>{r.permanentAddress.country} </Button> 
                    </div>

                </Card.Text>
                </Card.Body>
            </Card>
           </div>
            
            </div>
        

            <div className={'row'}>
            <div className={'col-md-6'}>
            <Card border="danger">
                <Card.Header> <b>Company / Institution Information </b></Card.Header>
                <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    <div>
                        <Button className={"btn-danger"}>Company Name </Button> 
                        <Button className={"btn-light"}>{r.companyInfo.name} </Button> 
                    </div>

                    <div>
                        <Button className={"btn-danger"}>Address line1 </Button> 
                        <Button className={"btn-light"}>{r.companyInfo.address.line1} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>Address line2 </Button> 
                        <Button className={"btn-light"}>{r.companyInfo.address.line2} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>City </Button> 
                        <Button className={"btn-light"}>{r.companyInfo.address.city} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>State </Button> 
                        <Button className={"btn-light"}>{r.companyInfo.address.state} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>Country </Button> 
                        <Button className={"btn-light"}>{r.companyInfo.address.country} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>Phone number </Button> 
                        <Button className={"btn-light"}>{r.companyInfo.companyPhoneNumber} </Button> 
                    </div>

                </Card.Text>
                </Card.Body>
            </Card>
           </div>
           <div className={'col-md-6'}>
            <Card border="danger">
                <Card.Header> <b>Emergency Contact Infomation</b></Card.Header>
                <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    <div>
                        <Button className={"btn-danger"}>Name </Button> 
                        <Button className={"btn-light"}>{r.emergencyContact.firstName} 
                        {r.emergencyContact.middleName} {r.emergencyContact.lastName} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>Relationship to Resident </Button> 
                        <Button className={"btn-light"}>{r.emergencyContact.relationship} 
                         </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>Home Phone </Button> 
                        <Button className={"btn-light"}>{r.emergencyContact.homePhoneNumber} 
                         </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>Mobile Number </Button> 
                        <Button className={"btn-light"}>{r.emergencyContact.mobilePhoneNumber} 
                         </Button> 
                    </div>

                    <div>
                        <Button className={"btn-danger"}>Address line1 </Button> 
                        <Button className={"btn-light"}>{r.emergencyContact.address.line1} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>Address line2 </Button> 
                        <Button className={"btn-light"}>{r.emergencyContact.address.line2} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>City </Button> 
                        <Button className={"btn-light"}>{r.emergencyContact.address.city} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>State </Button> 
                        <Button className={"btn-light"}>{r.emergencyContact.address.state} </Button> 
                    </div>
                    
                    <div>
                        <Button className={"btn-danger"}>Country </Button> 
                        <Button className={"btn-light"}>{r.emergencyContact.address.country} </Button> 
                    </div>

                </Card.Text>
                </Card.Body>
            </Card>
           </div>
            
            </div>

        
            <Card border="danger">
                <Card.Header> <b>Preferences</b></Card.Header>
                <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    <div>
                        <Button className={"btn-danger"}>Food  </Button> 
                        <Button className={"btn-light"}>{r.preference.food} </Button> 
                    </div>
                    <div>
                        <Button className={"btn-danger"}>News Paper  </Button> 
                        <Button className={"btn-light"}>{r.preference.newsPaper} </Button> 
                    </div>
                </Card.Text>
                </Card.Body>
            </Card>

        </Container>
        </>
    )
  

};

export default ResidentProfileView;