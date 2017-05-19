import React, { Component } from 'react'
import Header from './Header'
import Splash from './Splash'
import PortfolioGallery from './PortfolioGallery'
import Contact from './Contact'
import allProjectData from './allProjectData'

class App extends Component {
  render() {
    return (
      <div>
        <Header text={'Ethan Stark'}/>
        <Splash />
        <PortfolioGallery allProjectData={ allProjectData }/>
        <Contact />
      </div>
    )
  }
}

export default App
