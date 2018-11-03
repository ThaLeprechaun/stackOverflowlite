const data = require("../../userData.json");

module.exports = (req, res) => {
  const userId = req.params.userId * 1;
  const user = data.users.find(u => u.id === userId);
  if (!user) {
    res.status(404).send("User not found");
    return;
  }
  res.status(200).json({ user });
};
