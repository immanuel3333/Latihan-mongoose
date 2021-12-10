class ArtisController {
  //kalau ga pakai static, harus buat instance dulu baru bisa akses method
  //   async createNewArtis(req, res) {
  //     res.send({ msg: "ini controller untuk create new artis" });
  //   }
  //   class method => tidak perlu buat instance untuk akses methodnnya
  static async createNewArtis(req, res) {
    res.send({ msg: "ini controller untuk create new artis" });
  }

  static async getAllArtis(req, res) {
    res.send({ msg: "ini controller untuk get all artis" });
  }

  static async getArtisByID(req, res) {
    res.send({ msg: "ini controller untuk get artis by id" });
  }

  static async updateArtis(req, res) {
    res.send({ msg: "ini controller untuk update artis" });
  }

  static async deleteArtis(req, res) {
    res.send({ msg: "ini controller untuk delete artis" });
  }
}
module.exports = ArtisController;
