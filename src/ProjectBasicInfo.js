import React, { Component } from 'react'
import { Link } from 'react-router'
import ProjectImage from './ProjectImage'
import TextBox from './TextBox'
import './ProjectBasicInfo.css'

export default class ProjectBasicInfo extends Component {

  static propTypes = {
    projectData: React.PropTypes.object.isRequired
  }

  render() {
    const {
      projectName,
      shortDescription,
      route
    } = this.props.projectData

    return (
      <div className='project'>
        <Link to={`/${route}`}>
          <h1 className='project-title'>
            { projectName }
          </h1>
        </Link>
        <Link to={`/${route}`}>
          <ProjectImage projectData={ this.props.projectData }/>
        </Link>
        <TextBox description={ shortDescription } />
      </div>
    )
  }
}
