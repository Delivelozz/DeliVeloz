const closeUserController = require("../../controllers/users/closetUserController");

const closeUsersHandler = async (req, res) => {
  try {
    await closeUserController(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = closeUsersHandler;
