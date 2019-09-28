import React from 'react';
import AdvancedTable from '../common/AdvancedTable';
import LookUpSelect from '../common/LookUpSelect';

class DemoTable extends React.Component {

    constructor(props){
        super(props);
        this.renderDemoTable=this.renderDemoTable.bind(this);
    }

    renderDemoTable(){
        let table={};
        table.tableTitle="Expense List";
        table.columns=['number','firstName','lastName','userName'];
        table.createNewRoute="/expenses";
        table.recordRoute="/users";
        table.showRecordIcon=true;
        table.data=[
            {number:'1',firstName:'john',lastName:'doe',userName:'john.doe'},
            {number:'2',firstName:'jane',lastName:'doe',userName:'jane.doe'}
        ];
        return <AdvancedTable table={table}/>;
    }

    renderDemoSelect(){
        return <LookUpSelect lookUpType="PG_ROLE"/>;
    }
    render(){
        return(
            this.renderDemoTable()
            //this.renderDemoSelect()
        )
    }
}

export default DemoTable;