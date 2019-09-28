import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CenterView from '../common/CenterView';
import Labels from '../../constants/Labels';
import JSONUtil from '../../util/JSONUtil';
import { withRouter } from 'react-router-dom';
import Routes from '../../constants/Routes';
import ExpenseService from '../../services/ExpenseService';

class CreateExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.createExpenseView = this.createExpenseView.bind(this);
        this.handleCreateExpense = this.handleCreateExpense.bind(this);
    }



    async handleCreateExpense(event) {
        event.preventDefault();
        const data = JSONUtil.formToJson(event.target);
        const expense = await ExpenseService.createExpense(data);
        console.log(data);
        this.props.history.push(Routes.LANDING_PAGE);
    }


    createExpenseView(){
        return (
            <CenterView>
                <Form onSubmit={this.handleCreateExpense}>

                    <Form.Group controlId="createExpenseType">
                        <Form.Label>Expense Type</Form.Label>
                        <Form.Control as="select" name="expenseType">
                            <option value="Grocery">Grocery</option>
                            <option value="Utility">Utilitiy</option>
                            <option value="Maintainance">Maintainance</option>
                            <option value="Others">Others</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Choose the type of Expense Grocery , Utility(Water ,Electricity),Maintainance, Others
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="createExpenseDate">
                        <Form.Label>Expense Date</Form.Label>
                        <Form.Control name="expenseDate" type="text" placeholder="DD/MM/YYYY" />
                    </Form.Group>
                    <Form.Group controlId="createExpenseAmount">
                        <Form.Label>Expense Amount</Form.Label>
                        <Form.Control name="expenseAmount" type="text" placeholder="Rs 0.0" />
                    </Form.Group>
                    <Form.Group controlId="createExpenseDetails">
                        <Form.Label>Details</Form.Label>
                        <Form.Control name="expenseDetails" as="textarea" placeholder="Expense Details" rows="3"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {Labels.CREATE_EXPENSE}
                    </Button>
                </Form>
            </CenterView>
        )

    }

    render(){
        return (
            <>
                {this.createExpenseView()}
            </>
        )
    }
}

export default withRouter(CreateExpenseForm);