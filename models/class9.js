const mongoose = require("mongoose");
const class9Schema = new mongoose.Schema(
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
const Class9 = mongoose.model("Class9", class9Schema);
module.exports = Class9;
