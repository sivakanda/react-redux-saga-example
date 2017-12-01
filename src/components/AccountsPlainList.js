import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemsIsLoading } from '../actions/Actions';
import AccountsList from '../components/AccountsList';
import hashHistory from '../helper/hashHistory';
import '../styles/style.css';

export class AccountsPlainList extends Component {
    constructor() {
        debugger;
        super();
    }

    render() {
        const {items} = this.props;
        return (
            <div>
                {items?
                <div>
                <span>Account Details:-</span>
                <ul>
                    {this.props.items.map((item) => (
                        <li key={item.s_no}>
                            {item.account_name}
                        </li>
                    ))}
                </ul></div>:<div></div>}
            </div>
        );
    }
}

AccountsPlainList.propTypes = {
    items: PropTypes.array
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = ({ items}) => ({
    items: items
});

/* connect method from react-router connects the component with redux store */
export default connect(
  mapStateToProps)(AccountsPlainList);