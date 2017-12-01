import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemsIsLoading } from '../actions/Actions';
import AccountsList from '../components/AccountsList';
//import '../styles/style.css';
import hashHistory from '../helper/hashHistory';

export class ItemList extends Component {
    constructor() {
        debugger;
        super();
        //hashHistory.push(`/accounts`);
        this.messageHandler = this.messageHandler.bind(this);
        this.keepItStandBy = this.keepItStandBy.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        window.addEventListener('message', this.messageHandler);
    }

    messageHandler(event) {
        debugger;
        if(event.origin !== 'http://localhost:8083')  {
            return;
        };
        console.log('message received:  ' + event.data, event);
        debugger;
    }

    keepItStandBy() {
        debugger;
        hashHistory.push(`/accounts`);
        this.props.dispatch(itemsIsLoading(true));
    }

    loadData() {
        debugger;
        //this.props.dispatch(itemsFetchData('http://599167402df2f40011e4929a.mockapi.io/items'));
        this.props.dispatch(itemsFetchData('./assets/accountsData.json', "cvs"));
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return (
                <div>
                    <button onClick={this.loadData}>Load Items..</button>
                    <p>Loading....</p>
                </div>
            );
        }

        return (
            <div>
                <button onClick={this.keepItStandBy}>Keep Standby..</button>
                <button onClick={this.loadData}>Load Items..</button>
                <ul>
                    {this.props.items.map((item) => (
                        <li key={item.id}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

ItemList.propTypes = {
    items: PropTypes.array
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = ({ items, itemsHasErrored, itemsIsLoading }) => ({
    items: items,
    hasErrored: itemsHasErrored,
    isLoading: itemsIsLoading
});

/* connect method from react-router connects the component with redux store */
export default connect(
  mapStateToProps)(ItemList);