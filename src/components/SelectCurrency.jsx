import React from "react";
import currencies from "./../config/currencies";

class SelectCurrency extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            currencies,
            from: currencies[0],
            to: currencies[1] // Euro
        }
    }

    handleClick = (event) => {
        this.props.onCurrencyChanged(event.target.value); 
    }

    render() {
        const { currencies } = this.state;
        // return <span>
        //     From 
        //     <strong>{from.name} ({from.sign})</strong>
        //     to
        //     <strong>{to.name} ({to.sign})</strong>
        // </span>
        return <div>
            <select onChange={this.handleClick}>
                {currencies.map( (currency, index) => (
                    <option
                        key={index}
                        value={index}
                    >
                        {currency.code}
                    </option>
                ))}
            </select>
        </div>
    }
}

export default SelectCurrency;