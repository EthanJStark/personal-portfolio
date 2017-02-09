import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {

  constructor( props ) {
    super( props )
  }

  render() {
    return (
      <div className='button grey'>
        <a href={this.props.url}>
        {this.props.label}
        </a>
      </div>
    )
  }
}
