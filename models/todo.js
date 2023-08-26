const mongoose = reuire("mongoose");
const todoSchema = new mongoose.Schema({
  // create schema using mongo db
  title: {
    type: String, // type of title is string
    required: true,
    maxLength: 50, // max lenght has to be 50 not more than that
  },
  description: {
    type: String,
    require: true,
    maxLength: 50,
  },
  createdAt: {
    type: Data,
    required: true,
    default: Data.now(),
  },
  updatedAt: {
    type: Data,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("todo", todoSchema); // use foe exporting schema
