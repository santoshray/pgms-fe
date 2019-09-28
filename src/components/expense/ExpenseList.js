import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import ExpenseService from '../../services/ExpenseService';

class ExpenseList extends React.Component {
    constructor(props) {
        super(props);
        this.getExpenses=this.getExpenses.bind(this);
        this.state = {
            expenses: []
        }
    }

    componentWillMount() {
        this.getExpenses();
    }

    async getExpenses(){
        const expensesResponse=await ExpenseService.getExpenseList();
        this.setState({ expenses: expensesResponse.data });
    }

    render() {
        return (
            <>
                {this.state.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.expenseId} expense={expense} />;
                })}
            </>
        )
    }
}

export default ExpenseList;