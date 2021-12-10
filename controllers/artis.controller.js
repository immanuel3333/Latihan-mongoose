const ArtisModel = require("../models/artis.model");

class ArtisController {
  //kalau ga pakai static, harus buat instance dulu baru bisa akses method
  //   async createNewArtis(req, res) {
  //     res.send({ msg: "ini controller untuk create new artis" });
  //   }
  //   class method => tidak perlu buat instance untuk akses methodnnya

  // {name: "bob"}
  static async createNewArtis(req, res) {
    // get `name` from req body
    // create a new artis object.
    // save to db.

    try {
      const body = req.body;
      const name = body.name;
      const genre = body.genre;
      const songs = body.songs;
      const artis = new ArtisModel({ name: name, genre: genre, songs: songs });
      const saved = await artis.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllArtis(req, res) {
    try {
      const artisList = await ArtisModel.find();
      res.status(200).send(artisList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getArtisByID(req, res) {
    try {
      const id = req.params.id;
      const artisList = await ArtisModel.findOne({ _id: id });
      res.status(200).send(artisList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateArtis(req, res) {
    try {
      // Ambil ID dari parameter
      const id = req.params.id;
      // Ambil data dari body
      const body = req.body;
      const genre = body.genre;
      const artisUpdate = await ArtisModel.updateOne(
        { _id: id },
        { genre: genre }
      );
      res.status(200).send({ message: "success" });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteArtis(req, res) {
    res.send({ msg: "ini controller untuk delete artis" });
  }
}
module.exports = ArtisController;
