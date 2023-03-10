const User = require("../../../models/user");
const Teacher = require("../../../models/teacher");
const { read } = require("fs");
module.exports.storeTeacher = async function (req, res) {
  try {
    let teacher = await Teacher.findOne({ email: req.body.email });
    if (!teacher) {
      let newTeacher = await Teacher.create({
        teacherId: req.user._id,
        name: req.body.name,
        avatar: req.body.avatar,
        gender: req.body.gender,
        certificateid: req.body.certificateid,
        dateofbirth: req.body.dateofbirth,
        umeedsession: req.body.umeedsession,
        class: req.body.class,
        mobile: req.body.mobile,
        email: req.body.email,
        addressName: req.body.addressName,
        about: req.body.about,
      });
      if (newTeacher) {
        return res.json(200, {
          message: "Teacher inserted succesfully",
        });
      }
    }
    return res.json(401, {
      message: "Teacher already in database",
    });
  } catch (err) {
    console.error(err);
    return res.json(500, {
      message: `${err}`,
    });
  }
};

module.exports.getTeacher = async function (req, res) {
  try {
    let teacher = await Teacher.find({
      umeedsession: req.query.batch,
    });

    if (!teacher) {
      return res.json(422, {
        message: "Teacher is not found in database",
      });
    }
    return res.json(200, {
      message: "Sign in successful, here is your token, please keep it safe!",
      success: true,
      data: {
        educator: teacher,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
