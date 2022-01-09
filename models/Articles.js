const mongoose = require("mongoose");

// Mongoose params
const articleSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
  },
  { collection: "articles" }
);

module.exports = mongoose.model("Article", articleSchema);
