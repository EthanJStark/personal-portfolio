import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {

  render() {
    return (
      <div className='button grey'>
        <a href={this.props.url} rel="noopener noreferrer" target="_blank">
          {this.props.label}
        </a>
      </div>
    )
  }
}
