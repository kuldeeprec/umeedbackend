const express = require("express");
const router = express.Router();
router.use("/user", require("./user"));
router.use("/student", require("./student"));
router.use("/teacher", require("./teacher"));
router.use("/admin", require("./admin"));
router.use("/classes", require("./classes"));
module.exports = router;
