const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/", {
      dbName: "social",
    });
    console.log("database connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectdb;
