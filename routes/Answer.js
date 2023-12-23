const express = require("express");
const router = express.Router();

const { listAnswer, addAnswer } = require("../controller/Answer");
const { cookieauthorization } = require("../middleware/CookieAuth");
const { route } = require("./Question");

router.get("/list", cookieauthorization, listAnswer);
router.get("/add", cookieauthorization, addAnswer);

export default router;
