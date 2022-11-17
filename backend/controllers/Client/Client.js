const responses = require("../../constants/responses");
const clientService = require("../../services/Client/Client");
const errorResponses = require("../../constants/errorResponses");

const createClient = async (req, res, next) => {
  try {
    const clientInfo = req.body;
    const client = await clientService.createClient(clientInfo);
    res.send(responses.genericResponse(200, true, client, null));
  } catch (error) {
    res.send(responses.genericResponse(500, false, null, error));
  }
};
const getClient = async (req, res, next) => {
  try {
    const { id } = req.query;
    const client = await clientService.getClientById(id);
    res.send(responses.genericResponse(200, true, client, null));
  } catch (error) {
    res.send(responses.genericResponse(500, false, null, error));
  }
};
const updateClient = async (req, res, next) => {
  try {
    const { id } = req.query;
    const clientInfo = req.body;
    const client = await clientService.updateClient({ ...clientInfo, id: id });
    if (!client) {
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
  createClient,
  getClient,
  updateClient,
};
