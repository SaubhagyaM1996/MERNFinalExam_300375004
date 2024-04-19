const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String}
});

const bookrecords = mongoose.model('bookrecords', bookSchema);
module.exports = bookrecords;