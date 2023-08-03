const express = require("express");

const router = express.Router();

const userController = require("../../controllers/userController");

// get the all books
router.get("/user", userController.getAllUsers);

// get the user by id
router.get("user/:id", userController.getUserById);

// create the user
router.post("user/", userController.createUser);

// update the user
router.patch("user/:id", userController.updateUser);

// delete the user

router.delete("user/:id", userController.deleteUser);

module.exports = router;
