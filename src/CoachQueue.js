import ProjectDetailsPage from './ProjectDetailsPage'
import allProjectData from './allProjectData'

export default class CoachQueue extends ProjectDetailsPage {

  static defaultProps = {
    projectData: allProjectData.coachqueue
  }
}
