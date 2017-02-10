import React, { Component } from 'react'

export default class PortfolioGallery extends Component {
  static propTypes = {
    allProjectData: React.PropTypes.object.isRequired
  }

  generateGalleryItems() {
    const allProjects = this.props.allProjectData
    for ( let project in allProjects ) {
      console.log('project',project)
    }
  }

  render () {
    this.generateGalleryItems()
    return (
      <div className='portfolio-container'>
      </div>
    )
  }
}
