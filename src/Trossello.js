import React, { Component } from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar';
import ProjectImage from './ProjectImage';
import Button from './Button'
import TextBox from './TextBox'
import Tag from './Tag'
import './project.css'

class Trossello extends Component {
  constructor( props ) {
    super( props )
  }

  render() {

    let navbar = <Navbar />
    let textbox = <TextBox
                    description='Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.'
                    badgeImage='./img/github.png'
                    badgeUrl='https://github.com/guildcrafts/trossello'
                  />
    let button = <Button label='Live Site' url='https://trossello.apps.learnersguild.org'/>

    if( this.props.minified ){
      button = null
      navbar = null
      textbox = null
    }

    return (
      <div className='project'>
        { navbar }
        <h1 className='project-title'>
          <Link to='/trossello'>Trossello</Link>
        </h1>
        <Link to='/trossello'>
          <ProjectImage />
        </Link>
        { button }
        { textbox }
        <Tag />
      </div>
    )
  }
}

export default Trossello
