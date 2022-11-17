const taskRouter = require("express").Router();
const taskController = require("../../controllers/Task/Task");
const { verifyUser } = require("../../utils/auth");
taskRouter.post("/create", verifyUser, taskController.create);
taskRouter.get("/", verifyUser, taskController.getTask);
taskRouter.get(
  "/get_all_employee_tasks",
  verifyUser,
  taskController.getTaskByEmployes
);
taskRouter.delete("/", verifyUser, taskController.deleteTask);
taskRouter.put("/update", verifyUser, taskController.update);
taskRouter.put("/change_status", verifyUser, taskController.change_status);
// lock hours to any task
taskRouter.post("/lock_hours", verifyUser, taskController.lockHours);
taskRouter.post(
  "/get_lock_hours_by_task",
  verifyUser,
  taskController.getLockHours
);

module.exports = taskRouter;
