import React, { Component } from 'react'
import ProjectBasicInfo from './ProjectBasicInfo'

export default class PortfolioGallery extends Component {
  static propTypes = {
    allProjectData: React.PropTypes.object.isRequired
  }

  render () {
    const allProjects = this.props.allProjectData

    let projects = []

    for ( let project in allProjects ) {
      projects.push(
        <ProjectBasicInfo
          projectData={ allProjects[ project ] }
          key={ allProjects[ project ].projectName }
        />
      )
    }

    return (
      <div className='portfolio-container'>
        { projects }
      </div>
    )
  }
}
