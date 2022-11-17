const User = require("./User");
const Employee = require("./Employee");
const Role = require("./Role");
const Company = require("./Company");
const UserSession = require("./UserSession");
const Client = require("./Client");
const Project = require("./Project");
const Permission = require("./Permission");
const Task = require("./Task");
const TaskCategory = require("./TaskCategory");
const TaskPriority = require("./TaskPriority");
const TaskStatus = require("./TaskStatus");
const LogTaskHours = require("./LogTaskHours");

Task.belongsTo(TaskCategory);
Task.belongsTo(TaskPriority);
Task.belongsTo(TaskPriority);
Task.belongsTo(TaskStatus);
Task.belongsTo(Project);
Task.belongsTo(Employee);
// LogTaskHours.hasOne(Task);
Task.hasMany(LogTaskHours);

User.hasMany(UserSession);
UserSession.belongsTo(User);

User.hasOne(Employee);
Employee.belongsTo(User);

User.belongsToMany(Role, { through: "user_roles" });
Role.belongsToMany(User, { through: "user_roles" });

Role.belongsToMany(Permission, { through: "role_permissions" });
Permission.belongsToMany(Role, { through: "role_permissions" });

Company.hasOne(User);
User.belongsTo(Company);

Company.hasOne(Client);
Client.belongsTo(Company);

Client.hasOne(Project);
Project.belongsTo(Client);
