const Task = require("../../models/Task");
const TaskCategory = require("../../models/TaskCategory");
const TaskPriority = require("../../models/TaskPriority");
const TaskStatus = require("../../models/TaskStatus");
const LogTaskHours = require("../../models/LogTaskHours");
const Employee = require("../../models/Employee");
const Project = require("../../models/Project");
const Client = require("../../models/Client");
const User = require("../../models/User");

const createTask = async (taskInfo) => {
  try {
    const task = await Task.create(taskInfo);
    if (!task) {
      return false;
    }
    return task.dataValues;
  } catch (error) {
    return false;
  }
};
const updateTask = async (taskInfo, id) => {
  try {
    const task = await Task.update(taskInfo, { where: { id: id } });
    if (!task[0]) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};
const deleteTask = async (id) => {
  try {
    const task = await Task.destroy({ where: { id: id } });
    if (!task) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};
const getTask = async (id) => {
  try {
    const task = await Task.findOne({
      where: { id: id },
      attributes: ["id", "task_title", "task_description", "deadline"],
      include: [
        {
          model: TaskCategory,
          attributes: ["id", "task_category_type"],
        },
        { model: TaskPriority, attributes: ["id", "name"] },
        { model: TaskStatus, attributes: ["id", "name"] },
        {
          model: Employee,
          include: {
            model: User,
          },
        },
        {
          model: Project,
          attributes: ["id", "project_name", "description"],
          include: {
            model: Client,
            attributes: ["id", "client_name", "email"],
          },
        },
      ],
    });
    if (!task) {
      return false;
    }
    return task;
  } catch (error) {
    throw error;
  }
};
const lockTast = async (data) => {
  try {
    const lockHours = await LogTaskHours.create(data);
    if (!lockHours) {
      return false;
    }
    return lockHours;
  } catch (error) {
    throw error;
  }
};
const getTaskByEmployes = async (id) => {
  try {
    const task = await Task.findAll({
      where: { employee_id: id },
      attributes: ["id", "task_title", "task_description", "deadline"],
      include: [
        {
          model: TaskCategory,
          attributes: ["id", "task_category_type"],
        },
        { model: TaskPriority, attributes: ["id", "name"] },
        { model: TaskStatus, attributes: ["id", "name"] },
        {
          model: Employee,
          include: {
            model: User,
          },
        },
        {
          model: Project,
          attributes: ["id", "project_name", "description"],
          include: {
            model: Client,
            attributes: ["id", "client_name", "email"],
          },
        },
      ],
    });
    if (!task) {
      return false;
    }
    return task;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTask,
  lockTast,
  getTaskByEmployes,
};
