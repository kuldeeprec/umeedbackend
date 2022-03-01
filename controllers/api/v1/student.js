const User = require("../../../models/user");

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
    let student = await Student.findOne({ rollno: req.body.rollno });

    if (!student) {
      return res.json(422, {
        message: "student is not found in database",
      });
    }
    return res.json(200, {
      student: student,
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
