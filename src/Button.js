import React, { Component } from 'react'
import smoothscroll from 'smoothscroll'
import './Button.css'

export default class Button extends Component {
  static propTypes = {
    url: React.PropTypes.string
  }

  onClick( event ) {
    event.preventDefault()
    smoothscroll( this.props.url )
  }

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
