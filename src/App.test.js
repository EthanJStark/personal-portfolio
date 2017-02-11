import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Trossello from './Trossello'

it('renders homepage without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('renders Trossello page without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Trossello />, div)
})
