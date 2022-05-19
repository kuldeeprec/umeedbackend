const mongoose = require("mongoose");
const JnvSchema = new mongoose.Schema(
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
const Jnv = mongoose.model("Jnv", JnvSchema);
module.exports = Jnv;
