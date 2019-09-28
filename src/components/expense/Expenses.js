import React from 'react';
import CenterView from '../common/CenterView';
import Labels from '../../constants/Labels';
import { Card, Container,Row,Col } from 'react-bootstrap';
import CreateExpenseLink from './CreateExpenseLink';
import ExpenseList from './ExpenseList';

class Expenses extends React.Component {
    render() {
        return (
            <CenterView>
                <Card>
                    <Card.Header>
                        <Container>
                            <Row>
                                <Col>{Labels.EXPENSE_LIST}</Col> 
                                <Col></Col>
                                <Col className="text-right"><CreateExpenseLink /></Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Card.Body>
                        <ExpenseList />
                    </Card.Body>
                </Card>
            </CenterView>
        )
    }
}

//export default withAuthentication(Users);
export default Expenses;