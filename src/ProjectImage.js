import React, { Component } from 'react';

export default class ProjectImage extends Component {
  render() {
    return (
      <div className='project-image-frame'>
        <img className='project-image' src='./img/trossello.png' alt='Trossello'/>
      </div>
    )
  }
}