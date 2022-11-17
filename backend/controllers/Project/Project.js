const responses = require("../../constants/responses");
const projectService = require("../../services/Project/Project");
const errorResponses = require("../../constants/errorResponses");

const createProject = async (req, res, next) => {
  try {
    const projectInfo = req.body;
    const project = await projectService.createProject(projectInfo);
    res.send(responses.genericResponse(200, true, project, null));
  } catch (error) {
    res.send(responses.genericResponse(500, false, null, error));
  }
};
const getProject = async (req, res, next) => {
  try {
    const { id } = req.query;
    const project = await projectService.getProjectById(id);
    res.send(responses.genericResponse(200, true, project, null));
  } catch (error) {
    res.send(responses.genericResponse(500, false, null, error));
  }
};
const updateProject = async (req, res, next) => {
  try {
    const { id } = req.query;
    const projectInfo = req.body;
    const project = await projectService.updateProject({
      ...projectInfo,
      id: id,
    });
    if (!project) {
      res.send(
        responses.genericResponse(500, false, null, errorResponses.FAILURE)
      );
      return;
    }
    res.send(responses.genericResponse(200, true, {}, null));
  } catch (error) {
    res.send(responses.genericResponse(500, false, null, error));
  }
};
module.exports = {
  createProject,
  getProject,
  updateProject,
};
