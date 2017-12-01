import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, searchAccount } from '../actions/Actions';
import AccountsList from '../components/AccountsList';
import '../styles/style.css';
import "ag-grid-root/dist/styles/ag-grid.css";
import "ag-grid-root/dist/styles/theme-fresh.css";

export class UserDetailsContainer extends Component {
    constructor() {
        super();
        this.messageHandler = this.messageHandler.bind(this);
        this.state = {
            columnDefs:this.createColumnDefs()
        }
    }

    componentDidMount() {
        this.props.dispatch(itemsFetchData('./assets/accountsData.json', "CVS Pharmacy"));
        window.addEventListener('message', this.messageHandler);
    }

    createColumnDefs() {
        debugger;
        return [
            {headerName: "S.No", field: "s_no"},
            {headerName: "Account Name", field: "account_name"},
            {headerName: "Account Details", field: "account_details"},
            {headerName: "Address", field: "address"},
            {headerName: "Created Date", field: "created_date"},
            {headerName: "Additional Detail 1", field: "addnl_details_1"},
            {headerName: "Additional Detail 2", field: "addnl_details_2"},
            {headerName: "Additional Detail 3", field: "addnl_details_3"},
            {headerName: "Additional Detail 4", field: "addnl_details_4"},
            {headerName: "Additional Detail 5", field: "addnl_details_5"},
            {headerName: "Additional Detail 6", field: "addnl_details_6"},
            {headerName: "Additional Detail 7", field: "addnl_details_7"}
        ];
    }

    messageHandler(event) {
        debugger;
        if(event.origin !== 'http://localhost:8083')  {
            return;
        };
        this.props.dispatch(itemsFetchData('./assets/userData.json', event.data));
    }

    render() {
        debugger;
        const { items } = this.props;

        return (
            <div>
                <div className="row">
                    <AccountsList 
                        items={items} 
                        columnDefs={this.state.columnDefs}/>
                </div>
            </div>
        );
    }
}

UserDetailsContainer.propTypes = {
    items: PropTypes.array,
    dispatch: PropTypes.func.isRequired
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = ({ items }) => ({
    items: items
});

/* connect method from react-router connects the component with redux store */
export default connect(
  mapStateToProps)(UserDetailsContainer);
