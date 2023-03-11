const { default: axios } = require("axios");

const getNotesByUserName = async (username) => {
  try {
    const { data: user } = await axios.get(
      process.env.NOTE_SERVICE + "/users?username=" + username
    );
    if (!user && user.length === 0) throw new Error("INVALID USER");
    const { data: notes } = await axios.get(
      process.env.NOTE_SERVICE + "/notes?uid=" + user[0].id
    );
    return { username: user[0].name, notes };
  } catch (error) {
    throw error;
  }
};

module.exports = { getNotesByUserName };
