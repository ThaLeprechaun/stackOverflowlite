const data = require("../../data.json");

module.exports = (req, res) => {
  const questionId = req.params.questionId * 1;
  const question = data.questions.find(q => q.id === questionId);
  if (!question) {
    res.status(404).send("question not found");
    return;
  }
  res.status(200).json({ question });
};
