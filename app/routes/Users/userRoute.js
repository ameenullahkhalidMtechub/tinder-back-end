const express = require('express');

const router = express.Router();

const controller = require("../../controllers/Users/userController")

router.post("/register_with_email" , controller.registerWithEmail);
router.post("/register_with_ph" , controller.registerWithPh);
router.post("/login_with_email" , controller.login_with_email);
router.post("/login_with_ph" , controller.login_with_ph);
router.put("/updateProfile" , controller.updateProfile);
router.put("/updatePassword" , controller.updatePassword)
router.get("/getAllUsers"  , controller.getAllUsers)
router.get("/usersByPreference"  , controller.usersByPreference)
router.get("/usersByCategory"  , controller.usersByCategory)
router.get("/usersByInterest"  , controller.usersByInterest)





module.exports = router;