const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    questionString: {
      type: String,
      required: [true, "Please add your question"],
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Questions", QuestionSchema);
