import React, { Component } from 'react'
import './TextBox.css'

export default class TextBox extends Component {

  static propTypes = {
    description: React.PropTypes.string,
    badgeUrl: React.PropTypes.string,
    badgeImage: React.PropTypes.string,
  }

  static defaultProps = {
    badgeImage: './img/github.png'
  }

  render() {
    return (
      <div className='textbox'>
        <div className='textbox-description'>
          {this.props.description}
        </div>
        <a href={this.props.badgeUrl} rel="noopener noreferrer" target="_blank">
          <img className='badge-image' src={this.props.badgeImage} alt='badge'/>
        </a>
      </div>
    )
  }
}
