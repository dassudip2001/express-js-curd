const express = require("express");

const router = express.Router();

const userController = require("../../controllers/userController");

// get the all books
router.get("users", userController.getAllUsers);

// get the user by id
router.get("users/:id", userController.getUserById);

// create the user
router.post("users", userController.createUser);

// update the user
router.patch("users/:id", userController.updateUser);

// delete the user

router.delete("user/:id", userController.deleteUser);

module.exports = router;
