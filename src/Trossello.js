import ProjectDetailsPage from './ProjectDetailsPage'
import allProjectData from './allProjectData'

export default class Trossello extends ProjectDetailsPage {

  static defaultProps = {
    projectData: allProjectData.trossello
  }
}
