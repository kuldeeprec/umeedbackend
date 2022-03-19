const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const AVATAR_PATH = path.join("/uploads/users/avatars");
const studentSchema = new mongoose.Schema(
  {
    studentId: {
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
    rollno: {
      type: String,
      required: true,
      unique: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dateofbirth: {
      type: Date,
      required: true,
    },
    admissionDate: {
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
    },
    addressName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", AVATAR_PATH));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

// static
studentSchema.statics.uploadedAvatar = multer({ storage: storage }).single(
  "avatar"
);
studentSchema.statics.avatarPath = AVATAR_PATH;
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
