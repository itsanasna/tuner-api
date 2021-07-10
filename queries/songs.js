const db = require("../db/dbConfig.js");
console.log(db.any.toString());

const getAllSongs = async () => {
  try {
    const allSongs = await db.any('SELECT * FROM songs');
    return allSongs;
  } catch (error) {
    return error;
  }
};

const getSong = async (id) => {
  try {
    const song = await db.one(`SELECT * FROM songs WHERE id = $1`, id);
    return song;
  } catch (error) {
    console.log(error)
  }
}

const createSong = async (newSong) => {
  const { name, artist, album, time, is_favorite } = newSong;
  try {
    const oneSong = await db.one(
      "INSERT INTO songs(name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, artist, album, time, is_favorite]
    );
    return oneSong;

  } catch(error) {
    console.log(error)
  }
}

module.exports = {
    getAllSongs,
    getSong,
    createSong
  };