const data = require("../../userData.json");

module.exports = (req, res) => {
  if (!req.body.username) {
    res.status(400).send("Username is required");
    return;
  }
  if (!req.body.email) {
    res.status(400).send("email is required");
    return;
  }
  if (!req.body.password || req.body.password.length < 6) {
    res.status(400).send("password is required and must be greater than 6 characters");
    return;
  }
  if (!((req.body.username) && (req.body.email) && (req.body.password))) {
    res.status(400).send("Fields cannot be left blank");
    return;
  }

  const users = data.users;
  const newUserId = users.length + 1;
  const user = {
    id: newUserId,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }
  users.splice(newUserId, 0, user)
  return res.status(200).send({ message: "Account created Successfully", user }); /* eslint consistent-return: off */
}
