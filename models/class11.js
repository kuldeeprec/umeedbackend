const mongoose = require("mongoose");
const class11Schema = new mongoose.Schema(
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
const Class11 = mongoose.model("Class11", class11Schema);
module.exports = Class11;
