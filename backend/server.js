require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/db.config");

const initServer = async () => {
  // Start server
  app.listen(process.env.PORT, () => {
    console.log("Server is running at port " + process.env.PORT || 8000);
  });

  // Check DB connection
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  try {
    //Uncomment for resetting the DB in dev environment
    // await sequelize.sync({ force: true });
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("Error with syncing database:", error);
  }
};

initServer();
