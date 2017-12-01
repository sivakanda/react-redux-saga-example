import React, {Component} from "react";
import {AgGridReact, AgGridColumn} from "ag-grid-react";
import "ag-grid-root/dist/styles/ag-grid.css";
import "ag-grid-root/dist/styles/theme-fresh.css";

export default class extends Component {
    constructor(props) {
        debugger;
        super(props);
        this.state = {
            columnDefs: this.props.columnDefs,
            rowData: this.props.items
        }
    }

    onGridReady(params) {
        debugger;
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }

    createColumnDefs() {
        debugger;
        return [
            {headerName: "S.No", field: "s_no"},
            {headerName: "Account Name", field: "account_name"},
            {headerName: "Account Details", field: "account_details"}
        ];
    }

    render() {
        debugger;
        let containerStyle = {
            height: 115,
            width: 500
        };

        const {items} = this.props;

        return (
            <div style={containerStyle} className="ag-fresh">
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={items}
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        )
    }
};
