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
        <div className="form-group col-5">
          <label htmlFor={this.props.name}>{this.props.label}</label>
          <input 
            type="text" 
            className="form-control" 
            name={this.props.name}
            id={this.props.name} 
            aria-describedby={this.props.name}
            onChange={this.handleChange}
            onBlur={this.props.onBlur}
            value={this.state.inputField}
          />
          {this.props.error && <div>{this.props.error}</div>}
          <small id={this.props.name} className="form-text text-muted">{this.props.description}</small>
        </div>         
      );
  }
}

export default TextField;