const data = require("../../data.json");

module.exports = (req, res) => {
  if (!((req.body.title) && (req.body.description))) {
    res.status(400).send("Invalid input");
    return;
  }
  /* if((!req.body.description)){
    res.status(400).send("Invalid input");
    return;
  } */

  const questions = data.questions;
  const newId = questions.length + 1;
  const newQuestion = {
    "id": newId,
    "title": req.body.title,
    "description": req.body.description,
    "answer": []
  };
  // questions.push(newQuestion);
  questions.splice(newId, 0, newQuestion);
  return res.send(newQuestion); /* eslint consistent-return: off */
};
