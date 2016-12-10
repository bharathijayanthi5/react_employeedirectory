import React, { Component } from 'react';
import Header from './components/Header.jsx';

import EmployeeList from './components/EmployeeList.jsx';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
    <Header />

    <EmployeeList />

    </div>
    );
  }

}

export default App;
