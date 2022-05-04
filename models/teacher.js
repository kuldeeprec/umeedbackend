const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    teacherId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
    dateofbirth: {
      type: Date,
      required: true,
    },
    umeedsession: {
      type: Date,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    addressName: {
      type: String,
      required: true,
    },
    about: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
