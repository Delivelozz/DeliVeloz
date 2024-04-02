const loginUserController = require("../../controllers/users/loginUserController");

const loginUsersHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await loginUserController(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = loginUsersHandler;
