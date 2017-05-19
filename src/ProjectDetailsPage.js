import React, { Component } from 'react'
import Header from './Header'
import ProjectImage from './ProjectImage'
import Button from './Button'
import TextBox from './TextBox'
import Tag from './Tag'
import './ProjectDetailsPage.css'

export default class ProjectDetailsPage extends Component {

  static propTypes = {
    projectData: React.PropTypes.object.isRequired
  }

  render() {
    const {
      projectName,
      liveSite,
      shortDescription,
      githubLink,
    } = this.props.projectData

    let button = null
    if ( liveSite ) { button = <Button label='Live Site' url={ liveSite } /> }

    return (
      <div className='project'>
        <Header text={ 'Ethan Stark'}/>
        <h1 className='project-header'>
          { projectName }
        </h1>
        <ProjectImage projectData={ this.props.projectData }/>
        { button }
        <TextBox description={ shortDescription } badgeUrl={ githubLink } />
        <Tag />
      </div>
    )
  }
}
