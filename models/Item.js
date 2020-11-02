const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  roll: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
