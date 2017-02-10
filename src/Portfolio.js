import React, { Component } from 'react';
import Trossello from './Trossello'
import './project.css'

export default class Portfolio extends Component {

  render () {
    return (
      <div className='portfolio-container'>
        <Trossello minified='true' />
        <Trossello minified='true' />
      </div>
    )
  }
}
