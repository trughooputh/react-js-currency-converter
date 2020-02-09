import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CurrencyCalculator from './components/CurrencyCalculator';
import AppFooter from './components/AppFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header 
          className="AppHeader d-flex justify-content-center align-items-center flex-column"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="container">
          <h1>CurrencyCalculator</h1>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <CurrencyCalculator />
            </div>
          </div>
        </main>
        <AppFooter />
      </div>
    );
  }
}

export default App;
