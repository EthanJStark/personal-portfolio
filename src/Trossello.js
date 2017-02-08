import React, { Component } from 'react'
import Navbar from './Navbar';
import ProjectImage from './ProjectImage';
import './project.css'

class Trossello extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className='project-title'>Trossello</h1>
        <ProjectImage />
      </div>
    )
  }
}

export default Trossello
