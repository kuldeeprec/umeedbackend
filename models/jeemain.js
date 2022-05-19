const mongoose = require("mongoose");
const jeemainSchema = new mongoose.Schema(
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
const Jeemain = mongoose.model("Jeemain", jeemainSchema);
module.exports = Jeemain;
