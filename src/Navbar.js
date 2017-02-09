import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      isExtended: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.menuClass = this.menuClass.bind(this)
  }

  toggleNavbar() {
    this.setState( previousState => {
      let menuClass

      previousState.isExtended ?
        menuClass = "menu-collapsed"
        : menuClass = "menu-extended"
      return {
        isExtended: !previousState.isExtended,
        menuClass
      }
    })
  }

  menuClass() {
    return this.state.isExtended ? 'menu-extended' : 'menu-collapsed'
  }

  menuItems() {
    let menuItems = []
    if ( this.state.isExtended ) {
      menuItems =
      [<div className="menu-item" key="Portfolio">Portfolio</div>,
      <div className="menu-item" key="Contact">Contact</div>]
    }
    return menuItems
  }

  render() {
    return (
      <div className="Navbar">
        <h1 className="site-title"> Ethan Stark </h1>
        <div className="hamburger" onClick={ this.toggleNavbar }> &#9776; </div>
        <div className={ this.menuClass() }>
          { this.menuItems() }
        </div>
      </div>
    )
  }
}
