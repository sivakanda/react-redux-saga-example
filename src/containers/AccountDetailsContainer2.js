import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, searchAccount } from '../actions/Actions';
import AccountsPlainList from '../components/AccountsPlainList';
import '../styles/style.css';
import "ag-grid-root/dist/styles/ag-grid.css";
import "ag-grid-root/dist/styles/theme-fresh.css";
import { DropdownList } from 'react-widgets';
import { Multiselect } from 'react-widgets';
//import FilterList from '../components/FilterList';
import List from 'react-widgets/lib/List';
import genData from '../components/data/generate-data';
import CreateDropdownList from '../components/CreateDropdownList';
//import {Select} from 'grommet';
//import { Bootstrap } from 'react-bootstrap';
//import {BootstrapSelect} from 'react-bootstrap-select';
import $ from "jquery";
import Select2 from 'react-select2-wrapper';

export class AccountDetailsContainer extends Component {
    constructor() {
        super();
        this.handleSearch = this.handleSearch.bind(this);
        this.messageHandler = this.messageHandler.bind(this);
        this.dataSource = (genData(25)).slice(0);
    }

    componentDidMount() {
        window.addEventListener('message', this.messageHandler);
    }

    messageHandler(event) {
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

    listItemRenderer = ({ item }) => (
        <div>
            <span>
            <strong>{item.firstName}</strong>{" " + item.lastName}
            </span>
        </div>
    );

    render() {
        debugger;
        const { items } = [];
        console.log("Account Details List");
        //<AccountsPlainList items={items}/>

        return (
            <div>
                
                <div className="row rowPaddingCls">
                    <div style={{width:'450px',paddingLeft:'10px'}}>
                        <span> React Widgets - Select: </span>
                        <DropdownList 
                            filter
                            data={this.dataSource}
                            valueField='id'
                            textField='name'
                            allowCreate="onFilter"
                            itemComponent={this.listItemRenderer}/>
                    </div>
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

class FilterList extends Component {
    constructor(props) {
        console.log("**** FilterList ****");
        super(props)
        this.state = { filter: '' };
        this.dataList = (genData(25)).slice(0);
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.open && this.props.open) {
            setTimeout(() => this.refs.input.focus());
        }
    }

    componentDidMount(prevProps) {
        if (this.props.open) {
            setTimeout(() => this.refs.input.focus());
        }
    }

    render() {
        let { filter } = this.state;
        let data = this.filter();
        return (
            <div>
                <div style={{marginTop:'5px'}}>
                    <List {...this.props}
                        ref='list'
                        data={data}
                        onSelect={item => {
                            this.setState({ filter: '' })
                            this.props.onSelect(item)
                    }}/>
                </div>
            </div>
        )
    }

    filter = () => {
        debugger;
        var filter = this.state.filter.toLowerCase().trim();
        if(!filter) {
            //return this.dataList;
        } else {
            return this.dataList.filter ((d) => {
                debugger;
                return (d.name.toLowerCase().indexOf(filter) !== -1);
            });
        }
    }

    first() { 
        return this.refs.list.first();
    }

    last() { 
        return this.refs.list.last(); 
    }

    next(...args) { 
        return this.refs.list.next(...args); 
    }

    prev(...args) { 
        return this.refs.list.prev(...args);
    }
}

/* connect method from react-router connects the component with redux store */
export default connect(
  mapStateToProps)(AccountDetailsContainer);
