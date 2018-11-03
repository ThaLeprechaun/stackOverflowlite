const express = require("express");

const router = express.Router();
router.use(express.json());

// create Routes and export
router.get("/", require("./allUsers"));
router.get("/:userId", require("./singleUser"))
router.post("/", require("./signUp"));
router.post("/", require("./login"));

module.exports = router;
