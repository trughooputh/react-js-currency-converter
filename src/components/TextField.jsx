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
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-prepend">{this.props.currency.code}</span>
            </div>
            <input 
              type="number" 
              className="form-control" 
              value={this.props.inputField}
              name={this.props.name}
              id={this.props.name} 
              aria-describedby={this.props.name}
              onChange={this.handleChange}
              onBlur={this.props.onBlur}
              step="1"
              pattern="^\d+(\.|\,)\d{2}$"
              disabled={this.props.readOnly}
            />
            <div className="input-group-append">
              <span className="input-group-addon" id="basic-addon2">{this.props.currency.sign}</span>
            </div>
          </div>

          {this.props.error && <div>{this.props.error}</div>}
          <small id={this.props.name} className="form-text text-muted">{this.props.description}</small>
        </div>         
      );
  }
}

export default TextField;