import React, { Component } from 'react'
import './Tag.css'

export default class Tag extends Component {

  render(){
    return (
    <div className='tag-box'>
      <div className='tag-header'> Tags </div>
      <span className='tag'> React </span>
      <span className='tag'> SQL </span>
      <span className='tag'> Webpack </span>
      <span className='tag'> SASS </span>
      <span className='tag'> ES6 </span>
    </div>
    )
  }
}
