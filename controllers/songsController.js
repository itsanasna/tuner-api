const express = require("express");
const { getAllSongs, 
        getSong,
        createSong,
        } = require("../queries/songs");
const songs = express.Router();

// INDEX
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
  res.json(allSongs);
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    res.json(song);
})

songs.post("/", async (req, res) => {
    const newSong = req.body;
    const result = await createSong(newSong);
    res.json(result);
})
module.exports = songs;