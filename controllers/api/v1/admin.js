const User = require("../../../models/user");
const Admin = require("../../../models/admin");
module.exports.storeadmin = async function (req, res) {
  try {
    let admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
      let newAdmin = await Admin.create({
        AdminId: req.user._id,
        email: req.body.email,
        name: req.body.name,
      });
      if (newAdmin) {
        return res.json(200, {
          message: "Admin inserted succesfully",
        });
      }
    }
    return res.json(401, {
      message: "Admin already in database",
    });
  } catch (err) {
    console.error(err);
    return res.json(500, {
      message: `${err}`,
    });
  }
};

module.exports.getadmin = async function (req, res) {
  try {
    let admin = await Admin.findOne({ email: req.body.email });

    if (!admin) {
      return res.json(422, {
        message: "Admin is not found in database",
      });
    }
    return res.json(200, {
      admin: admin,
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
