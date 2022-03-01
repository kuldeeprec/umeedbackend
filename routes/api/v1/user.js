const express = require("express");
const router = express.Router();
const usersApi = require("../../../controllers/api/v1/users");
router.get("/", usersApi.userinfo);
router.post("/create-session", usersApi.createSession);
router.post("/signup", usersApi.signup);
// router.delete('/:id', passport.authenticate('jwt', {session: false}), postsApi.destroy);
module.exports = router;
