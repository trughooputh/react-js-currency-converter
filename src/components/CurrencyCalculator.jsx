
// import React, { Component } from 'react';
import React from 'react';
import Api from '../api';
import CURRENCIES from "./../config/currencies";

// Local component
import TextField from './TextField';
import SelectCurrency from './SelectCurrency';

class CurrencyCalculator extends React.Component {
    state = {
        fromCurrency : CURRENCIES[0],
        toCurrency : CURRENCIES[1],
        result: '',
    }

    handleCurrencyChanged = (index) => {
        this.setState({
            'fromCurrency': CURRENCIES[index]
        });
        this.HandleValidate();

    }

    handleFromCurrencyValueChange = (e) => {
        console.log(e);
        // this.setState({'fromCurrency': currencyValue}, this.HandleValidate());
    }
    
    handleToCurrencyValueChange = (currencyValue) => {
        this.setState({'toCurrency': currencyValue});
    }

    HandleValidate = () => {
        const { fromCurrency, toCurrency } = this.state;
        console.log("HandleValidate");
        if (fromCurrency && toCurrency) {
            Api.getCurrency(fromCurrency.code, toCurrency.code).then(res => {
                console.log(res);
                this.setState({'result': res});
            });
        }
        else
            console.log('empty');
    }

    /* USD to EUR */
    render() {
        const { fromCurrency, toCurrency } = this.state;
        return (
            <div className="CurrencyCalculator">
                <div className="row no-gutters justify-content-center align-items-center flex-row">
                    <TextField
                        onCurrencyChange={this.handleFromCurrencyValueChange}
                        currency={fromCurrency}
                        inputField={this.state.result}
                    />
                    <span className="col-2">To</span>
                    <TextField
                        // onCurrencyChange={this.handleToCurrencyValueChange}
                        currency={toCurrency}
                        readOnly={true}
                    />
                </div>
                <SelectCurrency
                    onCurrencyChanged={this.handleCurrencyChanged}
                />
                <div className="row mb-3 no-gutters justify-content-center align-items-center flex-row">
                    <button 
                        className="btn btn-primary"
                        onClick={this.HandleValidate}
                        disabled={!fromCurrency || !toCurrency}
                    >
                        Calculate
                    </button>
                </div>
                <p>RES : {this.state.result}</p>
                <div className="row no-gutters justify-content-center align-items-center flex-row">
                    <span className="badge badge-dark mr-3">Conversion :</span> {fromCurrency.name} / {toCurrency.name}
                </div>
            </div>
        )
    }    
};

export default CurrencyCalculator;