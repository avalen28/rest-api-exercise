const router = require("express").Router();

// @desc    Base URL of the API
// @route   GET /
// @access  Public
router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Connected" });
});

module.exports = router;
