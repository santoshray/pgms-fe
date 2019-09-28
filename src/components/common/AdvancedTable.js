import React from 'react';
import { Card, Button, Row, Col, Table, Link } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { startCase, orderBy } from 'lodash';

class AdvancedTable extends React.Component {

    constructor(props) {
        super(props);
        this.createNewHandler = this.createNewHandler.bind(this);
        this.recordHandler = this.recordHandler.bind(this);
        this.showRecordIcon = this.showRecordIcon.bind(this);
        this.showRecordIconHeader = this.showRecordIconHeader.bind(this);
        this.showSortIcon = this.showSortIcon.bind(this);
        this.state = {
            table: this.props.table
        }
    }

    componentWillMount() {
        let newState = Object.assign({}, this.state);
        let columns;
        if (this.state.table.columns) {
            columns = this.state.table.columns;
        } else {
            columns = Object.keys(this.state.table.data[0]);
        }
        columns = columns.map(column => {
            return {
                ascending: true,
                columnName: column,
                columnLabel: startCase(column)
            }
        })
        newState.table.columns = columns;
        this.setState(newState);
    }

    createNewHandler() {
        const { createNewRoute } = this.state.table;
        this.props.history.push(createNewRoute);
    }

    recordHandler(e,record) {
        const { recordRoute } = this.state.table;
        this.props.history.push({pathname:recordRoute,state:{record:record}});
    }

    showRecordIcon(record) {
        const { showRecordIcon } = this.state.table;
        if (!showRecordIcon)
            return;
        return (
            <td>
                <FontAwesomeIcon icon={faEdit} onClick={(e)=>this.recordHandler(e,record)}></FontAwesomeIcon>
            </td>
        )
    }

    showRecordIconHeader() {
        const { showRecordIcon } = this.state.table;
        if (!showRecordIcon)
            return;
        return (
            <th></th>
        )
    }

    showSortIcon(columnIndex, column) {
        if (column.ascending) {
            return (
                <FontAwesomeIcon icon={faAngleDown} onClick={(e) => this.sortHandler(e, columnIndex, column)}></FontAwesomeIcon>
            )
        } else {
            return (
                <FontAwesomeIcon icon={faAngleUp} onClick={(e) => this.sortHandler(e, columnIndex, column)}></FontAwesomeIcon>
            )
        }
    }

    sortHandler(event, columnIndex, column) {
        let order = [];
        if (column.ascending)
            order.push('asc');
        else
            order.push('desc');
        let orderColumns = [];
        orderColumns.push(column.columnName);
        let newState = Object.assign({}, this.state);
        let columns = newState.table.columns;
        const index = columnIndex - 1;
        let data = this.state.table.data;

        data = orderBy(data, orderColumns, order);
        for (let i = 0; i < columns.length; i++) {
            if (i == index) {
                columns[i].ascending = !columns[i].ascending;
            } else {
                columns[i].ascending = true;
            }
        }
        newState.table.columns = columns;
        newState.table.data = data;
        this.setState(newState);
    }

    render() {
        let hidden={
            display:'none'
        };
        const isReadOnly=this.props.isReadOnly;
        if(!isReadOnly)
            hidden={};
        const { tableTitle, columns } = this.state.table;
        let { data } = this.state.table;
        debugger;
        let columnIndex = 0;
        let rowIndex = 0;
        let dataIndex = 0;
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        <Row>
                            <Col xs={12}>
                                {tableTitle}
                                <Button style={hidden} variant="link" className="float-right" onClick={this.createNewHandler}>Create new</Button>
                            </Col>
                        </Row>
                    </Card.Title>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                {this.showRecordIconHeader()}
                                {columns.map(column => {
                                    columnIndex++;
                                    return (<th key={columnIndex}>
                                        {column.columnLabel}
                                        {this.showSortIcon(columnIndex, column)}
                                    </th>)
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(row => {
                                    rowIndex++;
                                    return (
                                        <tr key={rowIndex}>
                                            {this.showRecordIcon(row)}
                                            {columns.map(column => {
                                                dataIndex++;
                                                return (<td key={dataIndex}>
                                                    {row[column.columnName]}
                                                </td>)
                                            })}
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}

export default withRouter(AdvancedTable);