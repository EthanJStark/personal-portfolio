import React, { Component } from 'react';
import './Splash.css';

export default class Splash extends Component {

  render() {
    return (
      <div className="splash-background">
        <img className='headshot' src='./img/headshot.jpg' alt='headshot' />
        <h1 className='headline'>Full Stack Web Developer</h1>
        <div className='spacer'></div>
        <h1>Projects</h1>
        <div className='down-arrow'>&#9013;</div>
      </div>
    )
  }
}
