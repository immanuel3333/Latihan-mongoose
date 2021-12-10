const mongoose = require("mongoose");

const opts = {
  timestamps: true,
  versionKey: false,
};

const artisSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    genre: {
      type: String,
    },
    songs: {
      type: Array,
      default: [],
    },
  },
  opts
);

const ArtisModel = mongoose.model("Artis", artisSchema);
module.exports = ArtisModel;
