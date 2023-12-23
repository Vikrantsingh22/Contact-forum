const QuestionModel = require("../models/Questions");

async function addQuestion(req, res) {
  const { questionString } = req.body;
  const user_id = req.user.id;
  try {
    const newQuestion = await QuestionModel.create({
      questionString,
      user_id,
    });
    console.log(newQuestion.id);
  } catch (e) {
    console.log(`Question do not get added ${e}`);
  }
}
