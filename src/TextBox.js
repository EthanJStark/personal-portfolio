import React, { Component } from 'react'
import './TextBox.css'

export default class TextBox extends Component {

  constructor( props ) {
    super( props )
  }

  render() {
    return (
      <div className='textbox-wrapper'>
        <div className='textbox'>
          {this.props.description}
        </div>
        <a className='badge-link' href={this.props.badgeUrl}>
          <img src={this.props.badgeImage} alt='badge'/>
        </a>
      </div>
    )
  }
}
