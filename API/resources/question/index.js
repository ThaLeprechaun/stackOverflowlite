const express = require("express");

const router = express.Router();
router.use(express.json());

// create Routes and export
router.get("/", require("./all"));
router.get("/:questionId", require("./single"));
router.post("/", require("./create"));
router.post("/:questionId/answer", require("./answer"));
router.delete("/:questionId", require("./delete"));

module.exports = router;
