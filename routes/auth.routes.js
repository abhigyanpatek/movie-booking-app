const authController = require('../controllers/auth.controller');
const express = require('express');
const { validateUserReqBody } = require('../middlewares/verifyUserReqBody');
const router = express.Router();

router.post("/signup", validateUserReqBody, authController.signup);
router.post("/signin", authController.signin);

module.exports = router;