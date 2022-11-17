const clientRouter = require("express").Router();
const clientController = require("../../controllers/Client/Client");
const { verifyUser } = require("../../utils/auth");
clientRouter.post("/create", verifyUser, clientController.createClient);
clientRouter.get("/", verifyUser, clientController.getClient);
clientRouter.put("/update", verifyUser, clientController.updateClient);

module.exports = clientRouter;
