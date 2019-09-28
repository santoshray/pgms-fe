import React from 'react';
import Labels from '../../constants/Labels';
import { Form, Container, Row, Col } from 'react-bootstrap';
import './common.css';

const Name = (props) => (
    <Container>
        <Row>
            <Col className='pg-no-padding-left'>
                <Form.Group controlId="nameFirstName">
                    <Form.Label>{Labels.NAME.FIRST_NAME}</Form.Label>
                    <Form.Control name="firstName" type="text" placeholder="Enter first name" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="nameUpMiddleName">
                    <Form.Label>{Labels.NAME.MIDDLE_NAME}</Form.Label>
                    <Form.Control name="middleName" type="text" placeholder="Enter middle name" />
                </Form.Group>
            </Col>
            <Col className='pg-no-padding-right'>
                <Form.Group controlId="nameUpLastName">
                    <Form.Label>{Labels.NAME.LAST_NAME}</Form.Label>
                    <Form.Control name="lastName" type="text" placeholder="Enter last name" />
                </Form.Group>
            </Col>
        </Row>
    </Container>
)

export default Name;