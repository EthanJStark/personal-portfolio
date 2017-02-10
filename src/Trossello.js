import React, { Component } from 'react'
import Navbar from './Navbar';
import ProjectImage from './ProjectImage';
import Button from './Button'
import TextBox from './TextBox'
import Tag from './Tag'
import './project.css'

class Trossello extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className='project-title'>Trossello</h1>
        <ProjectImage />
        <Button label='Live Site' url='https://trossello.apps.learnersguild.org'/>
        <TextBox
          description='Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.'
          badgeImage='./img/github.png'
          badgeUrl='https://github.com/guildcrafts/trossello'
        />
        <Tag />
      </div>
    )
  }
}

export default Trossello
