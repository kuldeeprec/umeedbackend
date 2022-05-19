const mongoose = require("mongoose");
const ChsSchema = new mongoose.Schema(
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
const Chs = mongoose.model("Chs", ChsSchema);
module.exports = Chs;
