import React, { Component } from 'react';
import Navbar from './Navbar';
import Splash from './Splash';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Splash />
        <Portfolio />
      </div>
    )
  }
}

export default App
