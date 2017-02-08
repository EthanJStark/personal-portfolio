import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      label: 'Contact'
    }
  }

  render() {
    return (
      <div className='button grey'>
        {this.state.label}
      </div>
    )
  }
}
