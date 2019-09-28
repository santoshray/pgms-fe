import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './common.css';

export default class CenterView extends React.Component {
    render() {
        return (
            <Container className='pg-padding-top'>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        {this.props.children}
                    </Col>
                </Row>
            </Container>
        )

    }
}