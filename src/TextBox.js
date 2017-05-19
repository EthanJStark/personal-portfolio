import React, { Component } from 'react'
import './TextBox.css'

export default class TextBox extends Component {

  static propTypes = {
    description: React.PropTypes.string
  }

  render() {
    return (
      <div className='textbox'>
        <div className='textbox-description'>
          {this.props.description}
        </div>
      </div>
    )
  }
}
