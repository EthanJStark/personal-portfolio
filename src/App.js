import React, { Component } from 'react';
import Navbar from './Navbar';
import Splash from './Splash';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Splash />
      </div>
    )
  }
}

export default App;
