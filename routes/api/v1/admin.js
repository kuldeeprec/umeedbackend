const express = require("express");
const router = express.Router();
const passport = require("passport");
const adminApi = require("../../../controllers/api/v1/admin");
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
module.exports = router;
