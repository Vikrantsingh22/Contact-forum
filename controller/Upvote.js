const upvoteModel = require("../models/upvote");
const downvoteModel = require("../models/downvote");
const answerModel = require("../models/Answer");

async function upvote(req, res) {
  const { answer_id } = req.body;
  const user_id = req.user.id;
  const availableAnswer = await answerModel.find({
    _id: answer_id,
  });
  if (availableAnswer) {
    const ifUserHaveUpVotedThisAnswer = await upvoteModel.find({
      user_id: user_id,
      answer_id: answer_id,
    });
    if (ifUserHaveUpVotedThisAnswer) {
      console.log(`Cannot vote again for the same answer`);
    } else {
      try {
        const newUpvote = await upvoteModel.create({
          user_id,
          answer_id,
        });
        res.json({ res: newUpvote });
      } catch (e) {
        console.log(`Error occured while upvoting the answer ${e}`);
      }
    }
  } else {
    console.log(`Error while finding answer ${answer_id}`);
  }
}

async function upvoteCount(req, res) {
  const { answer_id } = req.body;
  const availableAnswer = await answerModel.find({
    _id: answer_id,
  });
  if (availableAnswer) {
    try {
      const TotalUpVoteCounts = await upvoteModel.countDocuments({
        answer_id: answer_id,
      });
      console.log(`Total UpvoteCount for this answer is ${TotalUpVoteCounts}`);
    } catch (e) {
      console.log(`Error occurred while fetching upovote for ${answer_id}`);
    }
  } else {
    console.log(`Answer is not availabe that is related to ${answer_id}`);
  }
}

async function DeleteTheUpcount(req, res) {
  const { answer_id } = req.body;
  const user_id = req.user.id;

  try {
    const DeletedUpCount = await upvoteModel.deleteOne({
      user_id,
      answer_id,
    });
    console.log(
      `You had Upvoted this answer ealier and in order to Down Vote This answer we have to Delete the Earlier Upvote`
    );
  } catch (e) {
    console.log(`error encountered while deleting the upvote ${e}`);
  }
}
