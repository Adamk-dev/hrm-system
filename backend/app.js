const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const { errors } = require("celebrate");
const passport = require("passport");

const userRouter = require("./routes/User/User");
const companyRouter = require("./routes/Company/Company");
const sessionRouter = require("./routes/User/Session");
const employeeRouter = require("./routes/Employee/Employee");
const clientRouter = require("./routes/Client/Client");
const projectRouter = require("./routes/Project/Project");
const tasksRouter = require("./routes/Task/Task");

require("./models/Relations");

require("./passport/JwtStrategy");
require("./passport/LocalStrategy.js");
require("./utils/auth.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//implementing cors
app.use(cors({ origin: true, credentials: true }));
// app.use(cors())
app.use(express.json());
app.use(passport.initialize());

// logging validation errors
// app.use(errors());

// Routes
app.get("/", (req, res) => res.send("working:"));
app.use("/users/", userRouter);
app.use("/companys/", companyRouter);
app.use("/user/session/", sessionRouter);
app.use("/employees/", employeeRouter);
app.use("/clients/", clientRouter);
app.use("/projects/", projectRouter);
app.use("/tasks/", tasksRouter);

module.exports = app;
