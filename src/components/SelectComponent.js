import React from 'react';
import Select from 'react-select';
 
export default class SelectComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOption: '',
      value: '',
      divStyle:'width:240px'
    }
  }
  
  handleChange = (selectedOption) => {
    debugger;
    this.setState({ selectedOption });
    this.props.selectAccount(selectedOption);
  }

  render() {
    return (
      <div style={{width: '240px'}}>
        <span>Accounts:-</span>
        <Select
          name="form-field-name"
          value={this.state.value}
          onChange={this.handleChange}
          options={this.props.accounts}
        />
      </div>
    );
  }
}