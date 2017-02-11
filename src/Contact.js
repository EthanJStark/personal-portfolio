import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return(
      <div className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='spacer'></div>
        <h2>
          <a href='mailto:ethanstark@gmail.com'>EthanStark@gmail.com</a>
        </h2>
        <h2>414.731.2172</h2>
      </div>
    )
  }
}
