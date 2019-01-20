import React from 'react'

class TextField extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputField: ''
    };
  }

  handleChange(event) {
    this.setState({
      inputField: event.target.value
    });
    this.props.onCurrencyChange(this.state.inputField);     
  }

  render() {
      return (
        <div>
        <label>
          {this.props.label}
          <input
            type="text"
            name={this.props.name}
            onChange={this.handleChange}
            onBlur={this.props.onBlur}
            value={this.state.inputField}
          />
          {this.props.error && <div>{this.props.error}</div>}
        </label>
      </div>            
      );
  }
}

export default TextField;