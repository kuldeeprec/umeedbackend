const mongoose = require("mongoose");
const class10Schema = new mongoose.Schema(
  {
    data: {
      type: String,
      required: true,
    },
    subjet: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Class10 = mongoose.model("Class10", class10Schema);
module.exports = Class10;
