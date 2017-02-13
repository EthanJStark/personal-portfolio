import React, { Component } from 'react';
import Button from './Button'
import './Splash.css';

export default class Splash extends Component {

  render() {
    return (
      <div className="splash-background">
        <img className='headshot' src='./img/headshot.jpg' alt='headshot' />
        <h1 className='header'>Full Stack Web Developer</h1>
        <Button label='Contact' url='#contact'/>
        <Button label='Portfolio'/>
        <div className='down-arrow'>&#9013;</div>
      </div>
    )
  }
}
