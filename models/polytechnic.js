const mongoose = require("mongoose");
const polytechnicSchema = new mongoose.Schema(
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
const Polytechnic = mongoose.model("Polytechnic", polytechnicSchema);
module.exports = Polytechnic;
