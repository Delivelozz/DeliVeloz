const loginAdministratorController = require("../../controllers/administrator/loginAdministratorController");

const loginAdministratorHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await loginAdministratorController(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = loginAdministratorHandler;
