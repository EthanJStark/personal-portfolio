import React, { Component } from 'react'
import './Tag.css'

export default class Tag extends Component {

  render(){
    return (
      <div className='tag'>
        <div className='tag-header'> Tags </div>
        <span className='tag-item'> React </span>
        <span className='tag-item'> SQL </span>
        <span className='tag-item'> Webpack </span>
        <span className='tag-item'> SASS </span>
        <span className='tag-item'> ES6 </span>
      </div>
    )
  }
}
