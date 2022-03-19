const User = require("../../../models/user");
const fs = require("fs");
const path = require("path");
const Student = require("../../../models/student");
module.exports.storeStudent = async function (req, res) {
  try {
    let student = await Student.findOne({ rollno: req.body.rollno });
    if (!student) {
      let newstudent = await Student.create({
        studentId: req.user._id,
        name: req.body.name,
        avatar: req.body.avatar,
        rollno: req.body.rollno,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        gender: req.body.gender,
        dateofbirth: req.body.dateofbirth,
        admissionDate: req.body.admissionDate,
        class: req.body.class,
        mobile: req.body.mobile,
        email: req.body.email,
        addressName: req.body.addressName,
      });
      if (newstudent) {
        return res.json(200, {
          message: "student inserted succesfully",
        });
      }
    }
    return res.json(401, {
      message: "student already in database",
    });
  } catch (err) {
    console.error(err);
    return res.json(500, {
      message: `${err}`,
    });
  }
};

module.exports.getStudent = async function (req, res) {
  try {
    let student = await Student.findOne({ rollno: req.query.rollno });

    if (!student) {
      return res.json(422, {
        message: "student is not found in database",
      });
    }
    return res.json(200, {
      message: "Sign in successful, here is your token, please keep it safe!",
      success: true,
      data: {
        student: student,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
module.exports.update = async function (req, res) {
  try {
    let student = await Student.findOne({ rollno: req.query.rollno });
    Student.uploadedAvatar(req, res, function (err) {
      if (err) {
        console.log("*****multer err", err);
      }
      if (req.file) {
        // if (student.avatar) {
        //   fs.unlinkSync(path.join(__dirname, "..", student.avatar));
        // }
        //thsi is saving the path of thee uploaded file tinto the avatar field int eh user

        student.avatar = Student.avatarPath + "/" + req.file.filename;
      }
      student.save();
      return res.json(200, {
        message: "profile updated",
        success: true,
      });
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
