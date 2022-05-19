const mongoose = require("mongoose");
const NotificationSchema = new mongoose.Schema(
  {
    data: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Notification = mongoose.model("Notification", NotificationSchema);
module.exports = Notification;
