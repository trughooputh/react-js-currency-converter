
import React, { Component } from 'react';
import axios from 'axios';

// Local component
import TextField from './TextField';

class CurrencyCalculator extends React.Component {
    state = {
        fromCurrency : '',
        toCurrency : '',
    }

    render() {
        const { fromCurrency, toCurrency } = this.state;
        return (
        <div className="CurrencyCalculator">
            CurrencyCalculator
            <TextField
                onCurrencyChange={this.handleFromCurrencyChange}
            />
            <TextField
                onCurrencyChange={this.handleToCurrencyChange}
            />
            {fromCurrency} / {toCurrency}
            <button onClick={this.handleClick}>
                Calculate
            </button>
        </div>)
    }

    handleFromCurrencyChange = (currencyValue) => {
        console.log(currencyValue);
        this.setState({'fromCurrency': currencyValue});
    }
    
    handleToCurrencyChange = (currencyValue) => {
        console.log(currencyValue);
        this.setState({'toCurrency': currencyValue});
    }

    handleClick = () => {
        const urlApi = "http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1";
        axios.get(urlApi).then((response) => {
            console.log(response.data)
        }).catch((err) => {
            console.log(err);
        });
    }

    
};

export default CurrencyCalculator;