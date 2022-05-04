const express = require("express");
const router = express.Router();
const passport = require("passport");
const teacherApi = require("../../../controllers/api/v1/teacher");
router.post(
  "/createTeacher",
  passport.authenticate("jwt", { session: false }),
  teacherApi.storeTeacher
);
router.get("/info", teacherApi.getTeacher);
module.exports = router;
