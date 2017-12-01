import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, searchAccount } from '../actions/Actions';
import AccountsPlainList from '../components/AccountsPlainList';
import '../styles/style.css';
import "ag-grid-root/dist/styles/ag-grid.css";
import "ag-grid-root/dist/styles/theme-fresh.css";

export class AccountDetailsContainer extends Component {
    constructor() {
        super();
        this.handleSearch = this.handleSearch.bind(this);
        this.messageHandler = this.messageHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('message', this.messageHandler);
    }

    messageHandler(event) {
        debugger;
        if(event.origin !== 'http://localhost:8083')  {
            return;
        };
        this.props.dispatch(itemsFetchData('./assets/accountsData.json', event.data));
    }

    handleSearch(event) {
        event.preventDefault();
        if (this.query !== null) {
            this.props.dispatch(searchAccount(this.query.value));
            this.query.value = '';
        }
    }

    render() {
        debugger;
        const { items } = [];

        return (
            <div>
                <div className="row">
                    <AccountsPlainList items={items}/>
                </div>
            </div>
        );
    }
}

AccountDetailsContainer.propTypes = {
    items: PropTypes.array,
    dispatch: PropTypes.func.isRequired
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = ({ items }) => ({
    items: items
});

/* connect method from react-router connects the component with redux store */
export default connect(
  mapStateToProps)(AccountDetailsContainer);
