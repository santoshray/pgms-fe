import React from 'react';

class ExpenseListItem extends React.Component {

    render() {
        const { expense }=this.props;
        const expenseName=expense.expenseType+' '+expense.expenseAmount;
        return (
            <a target="_blank" onClick={this.props.expense.handleOnClick} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="h5 mb-3">{expenseName}</h5>
                    </div>
                </div>
                <i className="fa fa-chevron-right"></i>
            </a>
        )
    }
}

export default ExpenseListItem;