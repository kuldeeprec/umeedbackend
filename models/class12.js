const mongoose = require("mongoose");
const class12Schema = new mongoose.Schema(
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
const Class12 = mongoose.model("Class12", class12Schema);
module.exports = Class12;
