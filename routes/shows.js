const router = require("express").Router();
const Show = require("../models/Show");

// @desc    Get all shows
// @route   GET /shows
// @access  Public
router.get("/", async (req, res, next) => {
  try {
    const shows = await Show.find();
    console.log(shows);
    res.status(200).json(shows);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
