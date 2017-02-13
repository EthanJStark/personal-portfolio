import React, { Component } from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar';
import ProjectImage from './ProjectImage';
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
      longDescription,
      githubLink,
    } = this.props.projectData

    let button = null
    if ( liveSite ) { button = <Button label='Live Site' url={ liveSite } /> }

    return (
      <div className='project'>
        <Navbar />
        <h1 className='project-title'>
          { projectName }
        </h1>
        <Link to='/trossello'>
          <ProjectImage projectData={ this.props.projectData }/>
        </Link>
        { button }
        <TextBox description={ longDescription } badgeUrl={ githubLink } />
        <Tag />
      </div>
    )
  }
}
