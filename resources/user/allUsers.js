const data = require("../../userData.json");

module.exports = (req, res) => {
  const users = data.users;
  res.status(200).json({ users });
};
