const data = require("../../data.json");

module.exports = (req, res) => {
  let notFound = true;
  const questionId = parseInt(req.params.questionId, 10); // take note of the 10
  data.questions.forEach((question) => {
    if (question.id === questionId) {
      notFound = false;
      // question.answers.push(req.body.answers);
    }
  });

  if (notFound) {
    res.status(404).send("question not found");
    return;
  }

  const updatedQuestion = {
    id: questionId,
    title: req.body.title,
    description: req.body.description,
    answers: []
  }
  data.questions.splice(questionId, 0, updatedQuestion);
  return res.send({ message: "Successfully updated", updatedQuestion }); /* eslint consistent-return: off */
}
