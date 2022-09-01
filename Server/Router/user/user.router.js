const router = require("express").Router();
const controller = require("../../controller/user/user.controller.js");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/send-otp", controller.sendOTPMail);


module.exports = router;