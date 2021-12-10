const express = require("express");

const ArtisController = require("../controllers/artis.controller");
// const artiscontrollerinstance = new ArtisController();

// creates a new router instance.
const router = express.Router();

// router.post("/", artiscontrollerinstance.createNewArtis);
router.post("/", ArtisController.createNewArtis);
router.get("/", ArtisController.getAllArtis);
router.get("/:id", ArtisController.getArtisByID);
router.patch("/:id", ArtisController.updateArtis);
router.delete("/:id", ArtisController.deleteArtis);

module.exports = router;
