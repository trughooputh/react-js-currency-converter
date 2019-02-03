
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
            CurrencyCalculator
            <TextField
                onCurrencyChange={this.handleFromCurrencyChange}
                inputField={this.state.fromCurrency}
            />
            <TextField
                onCurrencyChange={this.handleToCurrencyChange}
                inputField={this.state.toCurrency}
            />
            {fromCurrency} / {toCurrency}
            <button 
                onClick={this.HandleValidate}
                disabled={!this.state.fromCurrency || !this.state.toCurrency}
            >
                Calculate
            </button>
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