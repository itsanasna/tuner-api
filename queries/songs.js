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

module.exports = {
    getAllSongs,
  };