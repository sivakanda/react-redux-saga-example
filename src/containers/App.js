import React, { Component, PropTypes } from 'react';
import Header from '../components/common/Header';

class App extends Component {
    
    render() {
        debugger;
        return (
          <div className="container-fluid text-center">
            {this.props.children}
          </div>
        );
    }
}
App.propTypes = {
    children: PropTypes.object.isRequired
};
export default App;
