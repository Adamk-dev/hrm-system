const Project = require("../../models/Project");

const createProject = async (projectInfo) => {
  const { project_name, description, client_id } = projectInfo;
  try {
    const project = await Project.create({
      project_name: project_name,
      clientId: client_id,
      description: description,
    });
    if (!project) {
      return false;
    }
    return project;
  } catch (error) {
    console.error(error);
  }
};
const getProjectById = async (id) => {
  try {
    const project = await Project.findOne({
      where: {
        id: id,
      },
    });
    if (project && project.dataValues) {
      return project.dataValues;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};
const updateProject = async (projectInfo) => {
  try {
    const { project_name, description, client_id, id } = projectInfo;
    const project = await Project.update(
      {
        project_name: project_name,
        clientId: client_id,
        description: description,
      },
      {
        where: {
          id: id,
        },
      }
    );
    if (!project[0]) {
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
  }
};
module.exports = { createProject, getProjectById, updateProject };
