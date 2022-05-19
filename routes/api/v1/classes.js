const express = require("express");
const router = express.Router();
const passport = require("passport");
const classesApi = require("../../../controllers/api/v1/classesdata");
router.post(
  "/class9",
  passport.authenticate("jwt", { session: false }),
  classesApi.class9data
);
router.get("/class9", classesApi.getclass9data);
router.post(
  "/class10",
  passport.authenticate("jwt", { session: false }),
  classesApi.class10data
);
router.get("/class10", classesApi.getclass10data);
router.post(
  "/class11",
  passport.authenticate("jwt", { session: false }),
  classesApi.class11data
);
router.get("/class11", classesApi.getclass11data);
router.post(
  "/class12",
  passport.authenticate("jwt", { session: false }),
  classesApi.class12data
);
router.get("/class12", classesApi.getclass12data);
router.post(
  "/jeemain",
  passport.authenticate("jwt", { session: false }),
  classesApi.jeemaindata
);
router.get("/jeemain", classesApi.getjeemaindata);
router.post(
  "/chs",
  passport.authenticate("jwt", { session: false }),
  classesApi.chsdata
);
router.get("/chs", classesApi.getchsdata);
router.post(
  "/polytecnic",
  //   passport.authenticate("jwt", { session: false }),
  classesApi.polytecnicdata
);
router.get("/polytecnic", classesApi.getpolytecnicdata);
router.post(
  "/jnv",
  //   passport.authenticate("jwt", { session: false }),
  classesApi.jnvdata
);
router.get("/jnv", classesApi.getjnvdata);

module.exports = router;
