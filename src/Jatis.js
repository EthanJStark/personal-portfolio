import ProjectDetailsPage from './ProjectDetailsPage'
import allProjectData from './allProjectData'

export default class Jatis extends ProjectDetailsPage {

  static defaultProps = {
    projectData: allProjectData.jatis
  }
}
