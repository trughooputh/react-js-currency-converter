
// import React, { Component } from 'react';
import React from 'react';
import Api from '../api';

// Local component
import TextField from './TextField';

class CurrencyCalculator extends React.Component {
    state = {
        fromCurrency : 'USD',
        toCurrency : 'EUR',
    }
    render() {
        const { fromCurrency, toCurrency } = this.state;
        return (
        <div className="CurrencyCalculator">
            <div className="row no-gutters justify-content-center align-items-center flex-row">
                <TextField
                    onCurrencyChange={this.handleFromCurrencyChange}
                    inputField={this.state.fromCurrency}
                /> 
                <span className="col-2">To</span>
                <TextField
                    onCurrencyChange={this.handleToCurrencyChange}
                    inputField={this.state.toCurrency}
                />
            </div>
            <div className="row mb-3 no-gutters justify-content-center align-items-center flex-row">
                <button 
                    className="btn btn-primary"
                    onClick={this.HandleValidate}
                    disabled={!this.state.fromCurrency || !this.state.toCurrency}
                    >
                    Calculate
                </button>
            </div>
            <div className="row no-gutters justify-content-center align-items-center flex-row">
                <span className="badge badge-dark mr-3">Conversion :</span> {fromCurrency} / {toCurrency}
            </div>
        </div>)
    }

    handleFromCurrencyChange = (e) => {
        console.log(e);
        // this.setState({'fromCurrency': currencyValue}, this.HandleValidate());
    }
    
    handleToCurrencyChange = (currencyValue) => {
        this.setState({'toCurrency': currencyValue});
    }

    HandleValidate = () => {
        console.log("HandleValidate");
        if (this.state.fromCurrency && this.state.toCurrency)
            Api.getCurrency(this.state.fromCurrency, this.state.toCurrency);
        else
            console.log('empty');
    }

    
};

export default CurrencyCalculator;