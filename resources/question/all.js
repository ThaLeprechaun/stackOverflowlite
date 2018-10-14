const data = require("../../data.json");

module.exports = (req, res) => {
  const questions = data.questions;
  res.status(200).json({ questions });
};
