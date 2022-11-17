const responses = require("../../constants/responses");
const taskService = require("../../services/Task/Task");
const errorResponses = require("../../constants/errorResponses");

const create = async (req, res, next) => {
  try {
    const {
      task_title,
      task_description,
      deadline,
      company_id,
      task_category_id,
      task_priority_id,
      task_status_id,
      project_id,
      employee_id,
    } = req.body;
    const taskInfo = {
      task_title,
      task_description,
      deadline,
      company_id: company_id,
      taskCategoryId: task_category_id,
      taskPriorityId: task_priority_id,
      taskStatusId: task_status_id,
      projectId: project_id,
      employeeId: employee_id,
    };
    const task = await taskService.createTask(taskInfo);
    if (!task) {
      return res.send(
        responses.genericResponse(500, true, null, {
          message: errorResponses.FAILURE,
        })
      );
    }
    return res.send(responses.genericResponse(200, true, task, null));
  } catch (error) {
    return res.send(responses.genericResponse(500, false, null, error));
  }
};
const update = async (req, res, next) => {
  try {
    const {
      task_title,
      task_description,
      deadline,
      task_category_id,
      task_priority_id,
      project_id,
      employee_id,
    } = req.body;
    const { id } = req.query;
    const taskInfo = {
      task_title,
      task_description,
      deadline,
      taskCategoryId: task_category_id,
      taskPriorityId: task_priority_id,
      projectId: project_id,
      employeeId: employee_id,
    };
    const task = await taskService.updateTask(taskInfo, id);
    if (!task) {
      return res.send(
        responses.genericResponse(500, true, null, {
          message: errorResponses.FAILURE,
        })
      );
    }
    return res.send(
      responses.genericResponse(
        200,
        true,
        { message: responses.SUCCESS_UPDATE },
        null
      )
    );
  } catch (error) {
    return res.send(responses.genericResponse(500, false, null, error));
  }
};
const change_status = async (req, res, next) => {
  try {
    const { task_status_id } = req.body;
    const { id } = req.query;
    const taskInfo = {
      taskStatusId: task_status_id,
    };
    const task = await taskService.updateTask(taskInfo, id);
    if (!task) {
      return res.send(
        responses.genericResponse(500, true, null, {
          message: errorResponses.FAILURE,
        })
      );
    }
    return res.send(
      responses.genericResponse(
        200,
        true,
        { message: responses.SUCCESS_UPDATE },
        null
      )
    );
  } catch (error) {
    return res.send(responses.genericResponse(500, false, null, error));
  }
};
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.query;
    const task = await taskService.deleteTask(id);
    if (!task) {
      return res.send(
        responses.genericResponse(500, true, null, {
          message: errorResponses.FAILURE,
        })
      );
    }
    return res.send(
      responses.genericResponse(
        200,
        true,
        { message: responses.SUCCESS_DELETE },
        null
      )
    );
  } catch (error) {
    return res.send(responses.genericResponse(500, false, null, error));
  }
};
const getTask = async (req, res, next) => {
  try {
    const { id } = req.query;
    const task = await taskService.getTask(id);
    if (!task) {
      return res.send(
        responses.genericResponse(500, true, null, {
          message: errorResponses.FAILURE,
        })
      );
    }
    return res.send(responses.genericResponse(200, true, task, null));
  } catch (error) {
    return res.send(responses.genericResponse(500, false, null, error));
  }
};
const getTaskByEmployes = async (req, res, next) => {
  try {
    const { id } = req.query;
    const task = await taskService.getTaskByEmployes(id);
    if (!task) {
      return res.send(
        responses.genericResponse(500, true, null, {
          message: errorResponses.FAILURE,
        })
      );
    }
    return res.send(responses.genericResponse(200, true, task, null));
  } catch (error) {
    return res.send(responses.genericResponse(500, false, null, error));
  }
};
const lockHours = async (req, res, next) => {
  try {
    const { task_id, date, hours_worked } = req.body;
    const lcokInfo = {
      taskId: task_id,
      date,
      hours_worked,
    };
    const task = await taskService.lockTast(lcokInfo);
    if (!task) {
      return res.send(
        responses.genericResponse(500, true, null, {
          message: errorResponses.FAILURE,
        })
      );
    }
    return res.send(
      responses.genericResponse(200, true, { message: responses.SUCCESS }, null)
    );
  } catch (error) {
    return res.send(responses.genericResponse(500, false, null, error));
  }
};
const getLockHours = async (req, res, next) => {
  try {
    const { task_id } = req.query;
    const task = await taskService.getLockHours(task_id);
    if (!task) {
      return res.send(
        responses.genericResponse(500, true, null, {
          message: errorResponses.FAILURE,
        })
      );
    }
    return res.send(
      responses.genericResponse(200, true, { message: responses.SUCCESS }, null)
    );
  } catch (error) {
    return res.send(responses.genericResponse(500, false, null, error));
  }
};
module.exports = {
  create,
  update,
  change_status,
  deleteTask,
  getTask,
  lockHours,
  getTaskByEmployes,
  getLockHours,
};
