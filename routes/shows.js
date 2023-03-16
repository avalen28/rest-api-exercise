const router = require("express").Router();
const Show = require("../models/Show");

// @desc    Get all shows
// @route   GET /shows
// @access  Public
router.get("/", async (req, res, next) => {
  try {
    const shows = await Show.find();
    res.status(200).json(shows);
  } catch (error) {
    next(error);
  }
});

// @desc    Get an specific show
// @route   GET /shows/:showId
// @access  Public
router.get("/:showId", async (req, res, next) => {
  const { showId } = req.params;
  try {
    const show = await Show.findById(showId);
    res.status(200).json(show);
  } catch (error) {
    next(error);
  }
});

// @desc    Post create a show
// @route   POST /shows
// @access  Public
router.post("/", async (req, res, next) => {
  try {
    const newShow = await Show.create(req.body);
    res.status(201).json(newShow);
  } catch (error) {
    next(error);
  }
});

// @desc    Put update a show
// @route   PUT /shows/:showId
// @access  Public
router.put("/:showId", async (req, res, next) => {
  const { showId } = req.params;
  try {
    await Show.findByIdAndUpdate(showId, req.body, {
      new: true,
    });
    //se podría hacer con redirect ( res.redirect(`/shows/${showId}) ) pero para que quede más
    //claro, vuelvo a llamar a la DB.
    const updateShow = await Show.findById(showId);
    //el status 204 no devuelve nada a nivel data. sí que devuelve mensajes escritos
    res.status(200).json(updateShow);
  } catch (error) {
    next(error);
  }
});

// @desc    Put update a show
// @route   PUT /shows/:showId
// @access  Public
router.delete("/:showId", async (req, res, next) => {
  const { showId } = req.params;
  try {
    await Show.findByIdAndDelete(showId);
    const allShows = await Show.find();
    //el status 204 no devuelve nada a nivel data. sí que devuelve mensajes escritos
    res.status(200).json(allShows);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
