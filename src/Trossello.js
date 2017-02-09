import React, { Component } from 'react'
import Navbar from './Navbar';
import ProjectImage from './ProjectImage';
import Button from './Button'
import './project.css'

class Trossello extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className='project-title'>Trossello</h1>
        <ProjectImage />
        <Button label='Live Site' url='https://trossello.apps.learnersguild.org'/>
      </div>
    )
  }
}

export default Trossello
