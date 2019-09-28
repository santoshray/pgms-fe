import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './common.css';

export default class PageView extends React.Component {
    render() {
        return (
            <Container className='pg-padding-top'>
                <Row>
                    <Col>
                        {this.props.children}
                    </Col>
                </Row>
            </Container>
        )

    }
}