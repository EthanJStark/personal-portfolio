import React, { Component } from 'react';
import Navbar from './Navbar';
import Splash from './Splash';
import PortfolioGallery from './PortfolioGallery';
import allProjectData from './allProjectData'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Splash />
        <PortfolioGallery allProjectData={ allProjectData }/>
      </div>
    )
  }
}

export default App
