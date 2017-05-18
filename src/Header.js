import React from 'react'
import { Link } from 'react-router'
import './Header.css'

export default ({ text }) => {
  return (
    <Link to='/'>
      <h1 className="site-title">
        { text }
      </h1>
    </Link>
  )
}
