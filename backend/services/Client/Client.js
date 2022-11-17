const Client = require("../../models/Client");

const createClient = async (clientInfo) => {
  const { client_name, email, company_id } = clientInfo;
  try {
    const client = await Client.create({
      client_name: client_name,
      companyId: company_id,
      email: email,
    });
    if (!client) {
      return false;
    }
    return client;
  } catch (error) {
    console.error(error);
  }
};
const getClientById = async (id) => {
  try {
    const client = await Client.findOne({
      where: {
        id: id,
      },
    });
    if (client && client.dataValues) {
      return client.dataValues;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};
const updateClient = async (clientInfo) => {
  try {
    const { client_name, email, company_id, id } = clientInfo;
    const client = await Client.update(
      {
        client_name: client_name,
        companyId: company_id,
        email: email,
      },
      {
        where: {
          id: id,
        },
      }
    );
    if (!client[0]) {
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
  }
};
module.exports = { createClient, getClientById, updateClient };
