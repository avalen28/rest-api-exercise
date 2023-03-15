const { Schema, model } = require("mongoose");

const showSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "The TV show needs one title"],
  },
  creator: {
    type: String,
  },
  launched: {
    type: Number,
    required: [true, "Year of launched?"],
  },
  genre: {
    type: String,
    required: [true, "Type of genre?"],
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Show = model("Show", showSchema);

module.exports = Show;
