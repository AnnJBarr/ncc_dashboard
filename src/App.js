import React from 'react';
import './App.css';
import Header from './components/Header.js';
import User from './components/User.js';
import Totals from './components/Totals.js';
import Vulnerabilities from './components/Vulnerabilities.js';



class App extends React.Component {
  render() {
    return (
      <div className="container">
        <p>Welcome to Scan Dashboard!</p>
        <Header />
        <User />
        <Totals />
        <Vulnerabilities />

        
      </div>
    );
  }
}

export default App;
