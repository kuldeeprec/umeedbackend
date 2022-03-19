const express = require("express");
const router = express.Router();
const passport = require("passport");
const adminApi = require("../../../controllers/api/v1/admin");
const studentApi = require("../../../controllers/api/v1/student");
router.post(
  "/createadmin",
  passport.authenticate("jwt", { session: false }),
  adminApi.storeadmin
);
router.get(
  "/info",
  passport.authenticate("jwt", { session: false }),
  adminApi.getadmin
);
router.post(
  "/update/student",
  // passport.authenticate("jwt", { session: false }),
  studentApi.update
);
module.exports = router;
