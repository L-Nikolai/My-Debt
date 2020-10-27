import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

const AppHeader = ({debts}) => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My debts: {debts} &#x20bd; </p>
      </header>      
    </div>
  );
}

export default AppHeader;
