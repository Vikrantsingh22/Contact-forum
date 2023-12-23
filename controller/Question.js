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
    res.status(200);
  } catch (e) {
    console.log(`Question do not get added ${e}`);
  }
}

async function listQuestion(req, res) {
  try {
    const questionString = req.body;
    let filter;
    if (questionString != null) {
      filter = {
        questionString: {
          $regex: questionString,
        },
      };
    } else {
      filter = 0;
    }

    const { limit, page } = req.query;
    const QuestionList = await QuestionModel.find(filter)
      .limit((limit = 0))
      .skip((page - 1) * limit);
    const count = await QuestionModel.count();
    const totalPages = Math.ceil(count / limit);
    const Question = { totalPages, data: QuestionList };
    if (Question) {
      res.json({
        res: Question,
      });
    }
  } catch (e) {
    console.log(`Error occured ${e}`);
  }
}
