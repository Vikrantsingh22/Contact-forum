const express = require("express");
const router = express.Router();

const { listQuestion, addQuestion } = require("../controller/Question");
const { cookieauthorization } = require("../middleware/CookieAuth");

router.get("/list", cookieauthorization, listQuestion);
router.post("/add", cookieauthorization, addQuestion);

module.exports = router;
