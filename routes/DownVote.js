const express = require("express");
const router = express.Router();

const { AddDownVote, DownvoteCount } = require("../controller/Upvote");
const { cookieauthorization } = require("../middleware/CookieAuth");

router.get("/total", cookieauthorization, DownvoteCount);
router.post("/add", cookieauthorization, AddDownVote);

export default router;
