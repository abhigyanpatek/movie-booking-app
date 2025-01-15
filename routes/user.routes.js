const userController = require('../controllers/user.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');
const { validateUpdateUserReqBody } = require('../middlewares/verifyUserReqBody');
const express = require('express');
const router = express.Router();

router.put("/", verifyToken, userController.update);
router.put("/:id", [verifyToken, isAdmin, validateUpdateUserReqBody], userController.updateUser);

module.exports = router;