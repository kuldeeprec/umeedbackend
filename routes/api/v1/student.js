const express = require("express");
const router = express.Router();
const passport = require("passport");
const studentApi = require("../../../controllers/api/v1/student");
router.post(
  "/createStudent",
  passport.authenticate("jwt", { session: false }),
  studentApi.storeStudent
);
router.get(
  "/info",
  passport.authenticate("jwt", { session: false }),
  studentApi.getStudent
);
module.exports = router;
