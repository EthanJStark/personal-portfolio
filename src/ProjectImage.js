import React, { Component } from 'react';

export default class ProjectImage extends Component {
  static propTypes = {
    projectData: React.PropTypes.object.isRequired
  }

  render() {
    const { images, projectName } = this.props.projectData
    return (
      <div className='project-image-frame'>
        <img className='project-image' src={ images[0] } alt={ projectName } />
      </div>
    )
  }
}
